sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library"
], function (Controller, sapMLib) {
	"use strict";
	
	function onInit(){
		
	}
	
	function onAfterRendering(){

	}
	
	
	function navToCreateEmployee(){
	
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	
			oRouter.navTo("CreateEmployee",{},false);
	}
	
	
	function navToShowEmployee(){
	
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	
			oRouter.navTo("ShowEmployee",{},false);
	}

	function openEmployees () {
		const url = "https://a41501dbtrial-dev-logali-approuter.cfapps.us10-001.hana.ondemand.com";
		const { URLHelper } = sapMLib;
		URLHelper.redirect(url);
	}

	return Controller.extend("logaligroup.empleados.controller.Menu", {
		onInit: onInit,
		onAfterRendering : onAfterRendering,
		navToCreateEmployee : navToCreateEmployee,
		navToShowEmployee : navToShowEmployee,
		openEmployees: openEmployees
	});
});