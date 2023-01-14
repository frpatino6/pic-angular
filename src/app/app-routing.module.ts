import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
const resolvedChildBTitle: ResolveFn<string> = () => Promise.resolve('child b');

const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'first-component', redirectTo: 'first-component/child-a', pathMatch: 'full' },
  { path: 'first-component', component: FirstComponent,
  children: [
    {
      path: 'child-a', // child route path
      title: resolvedChildATitle,
      component: ChildAComponent, // child route component that the router renders
    },
    {
      path: 'child-b',
      title: resolvedChildBTitle,
      component: ChildBComponent, // another child route component that the router renders
    },
  ], },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/login-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
