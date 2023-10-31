import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgreementsNewComponent } from "./agreements-new/agreements-new.component";
import { AgreementsDetailComponent } from "./agreements-detail/agreements-detail.component";
import { AgreementsNavigationComponent } from "./agreements-navigation/agreements-navigation.component";

const routes: Routes = [
	{
		path: "",
		component: AgreementsNavigationComponent,
	},
	{
		path: "new/:C_ID",
		component: AgreementsNewComponent,
	},
	{
		path: ":AG_ID",
		component: AgreementsDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AgreementsRoutingModule {}
