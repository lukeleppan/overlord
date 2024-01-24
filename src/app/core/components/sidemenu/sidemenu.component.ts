import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  RouterModule,
  NavigationEnd,
  Event,
  ActivatedRoute,
  RouterLinkActive,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faPen,
  faChartLine,
  faSpaghettiMonsterFlying,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss',
})
export class SidemenuComponent {
  faSpaghettiMonsterFlying = faSpaghettiMonsterFlying;
  routes = [
    { path: '/dashboard', title: 'Dashboard', icon: faHouse },
    { path: '/articles', title: 'Articles', icon: faPen },
    { path: '/analytics', title: 'Analytics', icon: faChartLine },
  ];
  private activeRoute: string;

  constructor(private router: Router) {
    this.activeRoute = router.url;
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
