import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  RouterModule,
  NavigationEnd,
  Event,
  ActivatedRoute,
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
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss',
})
export class SidemenuComponent implements OnDestroy {
  faSpaghettiMonsterFlying = faSpaghettiMonsterFlying;
  routes = [
    { path: '/', title: 'Dashboard', icon: faHouse },
    { path: '/writing', title: 'Writing', icon: faPen },
    { path: '/analytics', title: 'Analytics', icon: faChartLine },
  ];
  private activeRoute: string;
  private routeSubscription: Subscription;

  constructor(private router: Router) {
    this.activeRoute = router.url;

    this.routeSubscription = this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.activeRoute = event.url;
        console.log(this.activeRoute);
      });
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
