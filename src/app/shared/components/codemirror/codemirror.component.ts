import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { EditorState, Line } from '@codemirror/state';
import { EditorView, gutter, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { FormGroup } from '@angular/forms';
import prettier from 'prettier/standalone';

const customBackgroundTheme = EditorView.theme(
  {
    '&.cm-editor': {
      backgroundColor: '#363636',
    },
    '&.cm-gutter-line-numbers': {
      backgroundColor: '#252525',
    },
  },
  { dark: true },
);

@Component({
  selector: 'app-codemirror',
  standalone: true,
  imports: [],
  templateUrl: './codemirror.component.html',
  styleUrl: './codemirror.component.scss',
})
export class CodemirrorComponent implements AfterViewInit {
  @Input() editorForm!: FormGroup;
  @ViewChild('editor') private editorRef!: ElementRef;
  private editorView: EditorView = {} as EditorView;

  constructor() {}

  ngAfterViewInit(): void {
    const updateContentControl = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const content = update.state.doc.toString();
        this.editorForm.controls['content'].setValue(content, {
          emitEvent: false,
        });
      }
    });

    this.editorView = new EditorView({
      state: EditorState.create({
        doc: '# Hello World',
        extensions: [
          keymap.of([...defaultKeymap]),
          lineNumbers(),
          gutter({ class: 'cm-gutter-line-numbers' }),
          markdown(),
          oneDark,
          customBackgroundTheme,
          EditorView.lineWrapping,
          updateContentControl,
          EditorView.updateListener.of((update) => {
            console.log(this.editorForm);
          }),
        ],
      }),
      parent: this.editorRef.nativeElement,
    });

    this.editorForm.controls['content'].valueChanges.subscribe((value) => {
      if (this.editorView.state.doc.toString() !== value) {
        this.editorView.dispatch({
          changes: {
            from: 0,
            to: this.editorView.state.doc.length,
            insert: value,
          },
        });
      }
    });
  }

  async formatContent() {
    const currentContent = this.editorView.state.doc.toString();

    const formattedContent = await prettier.format(currentContent, {
      parser: 'markdown',
    });

    const transaction = this.editorView.state.update({
      changes: {
        from: 0,
        to: this.editorView.state.doc.length,
        insert: formattedContent,
      },
    });

    this.editorView.dispatch(transaction);
  }
}
