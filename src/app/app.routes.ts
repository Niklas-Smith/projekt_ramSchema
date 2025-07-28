import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RamschemaComponent } from './ramschema/ramschema.component';


/*My routes for my website */
export const routes: Routes = [
{path:"courses", component:CoursesComponent},
{path:"ramschema", component:RamschemaComponent},
{path: "" , redirectTo: "/ramschema", pathMatch: "full"},
];
