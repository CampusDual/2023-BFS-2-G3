import { OTableComponent, OFormComponent, OnClickTableEvent } from "ontimize-web-ngx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	constructor(
		private router: Router,
		private actRoute: ActivatedRoute
	) {}

	@ViewChild("table", { static: true }) table: OTableComponent;
	//@ViewChild("form", { static: false }) form: OFormComponent;

	onClick(event: OnClickTableEvent) {
		this.table.toogleRowExpandable(event.row, event.rowIndex, event.mouseEvent);
	}

	ngOnInit() {
		// nothing to do
	}

	navigate() {
		this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
	}

	// onAction1() {
	//   console.log("Dentro del método");
	//   if (this.form && this.form.insert) {
	//     console.log("Dentro del if");
	//     this.form.insert();
	//   }
	// }
}
