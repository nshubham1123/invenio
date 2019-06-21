var entryModel=new sap.ui.model.json.JSONModel();
entryModel.loadData("json/entry.json","",false)
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.ui.model.Filter")

sap.ui.controller("project1.project1", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf project1.project1
	 */


	onInit: function() {
		thisRef=this;

		var countryModel=new sap.ui.model.json.JSONModel();
		countryModel.loadData("json/country.json","",false)
		thisRef.getView().byId("secountryc").setModel(countryModel)
		thisRef.getView().byId("secountryp").setModel(countryModel)

		var regionModel=new sap.ui.model.json.JSONModel();
		regionModel.loadData("json/region.json","",false)
		thisRef.getView().byId("seregionc").setModel(regionModel)
		thisRef.getView().byId("seregionp").setModel(regionModel)

		var bgModel1=new sap.ui.model.json.JSONModel();
		bgModel1.loadData("json/blood_group1.json","",false)
		thisRef.getView().byId("sebdgrp1").setModel(bgModel1)

		var bgModel2=new sap.ui.model.json.JSONModel();
		bgModel2.loadData("json/blood_group2.json","",false)
		thisRef.getView().byId("sebdgrp2").setModel(bgModel2)

		var projectModel=new sap.ui.model.json.JSONModel();
		projectModel.loadData("json/project.json","",false)
		thisRef.getView().byId("seproject").setModel(projectModel)

		var objectModel=new sap.ui.model.json.JSONModel();
		objectModel.loadData("json/object.json","",false)
		thisRef.getView().byId("seobject").setModel(objectModel)

		var activityModel=new sap.ui.model.json.JSONModel();
		activityModel.loadData("json/activity.json","",false)
		thisRef.getView().byId("seactivity").setModel(activityModel)

		var entryModel=new sap.ui.model.json.JSONModel();
		entryModel.loadData("json/entry.json","",false)
		thisRef.getView().byId("tab1").setModel(entryModel)

		thisRef.getView().byId("secountryt").setModel(countryModel)

		var today=new Date();
		thisRef.getView().byId("dpisdate").setMaxDate(today)
		thisRef.getView().byId("dpexdate").setMinDate(today)
		thisRef.getView().byId("dpbtdate").setMaxDate(today)
		thisRef.getView().byId("dpftbtdate").setMaxDate(today)
		thisRef.getView().byId("dpmtbtdate").setMaxDate(today)
		thisRef.getView().byId("dphrdate").setMaxDate(today)
		thisRef.getView().byId("dpmrgdate").setMaxDate(today)



	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf project1.project1
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf project1.project1
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf project1.project1
	 */
//	onExit: function() {

//	}

//	..................................Login Page.............................................	
	fnlogin: function(){

		thisRef=this;

		var usersModel=new sap.ui.model.json.JSONModel();
		usersModel.loadData("json/users.json","",false)


		var emailid = thisRef.getView().byId("inEmailid").getValue();
		var password = thisRef.getView().byId("inPassword").getValue();

		var users=usersModel.getProperty("/users")


		if(emailid=='' && password=='' )
		{
			sap.m.MessageBox.error("Please Enter Username or Password")
		}
		else
		{
			var match=0;
			var hr=0;
			for(var i=0;i<users.length;i++)
			{
				if(users[i].emailid==emailid && users[i].password==password)
				{
					if(users[i].hr=="yes")
						hr++;
					match++;
					break;
				}

			}
			if(match==1)
			{	
				if(hr==1)
					this.getView().byId("stempdetails").setVisible(true);
				else
					this.getView().byId("stempdetails").setVisible(false);
				
				this.getView().byId("pgwel").setVisible(true);
				this.getView().byId("pgprsnlinfo").setVisible(false);
				this.getView().byId("pgtsentry").setVisible(false);
				this.getView().byId("pglogin").setVisible(false);
				this.getView().byId("tname").setText(users[i].name);
			}
			else
				sap.m.MessageBox.error("Invalid Username Password")

		}


	},

	fnlogout : function(){
		this.getView().byId("pgwel").setVisible(false);
		this.getView().byId("pgprsnlinfo").setVisible(false);
		this.getView().byId("pgtsentry").setVisible(false);
		this.getView().byId("pglogin").setVisible(true);

		this.getView().byId("inEmailid").setValue("");
		this.getView().byId("inPassword").setValue("");

	},

//	...............................welcome page (conatining tiles)......................................
	fnprsnlinfo : function(){
		this.getView().byId("pgprsnlinfo").setVisible(true);
		this.getView().byId("pgwel").setVisible(false);
		this.getView().byId("pgtsentry").setVisible(false);
		this.getView().byId("pglogin").setVisible(false);
	},

	fntsentry : function(){
		this.getView().byId("pgtsentry").setVisible(true);
		this.getView().byId("pgprsnlinfo").setVisible(false);
		this.getView().byId("pgwel").setVisible(false);
		this.getView().byId("pglogin").setVisible(false);
	},
	
	fnempdetails : function(){
		this.getView().byId("pgempdata").setVisible(true);
		this.getView().byId("pgprsnlinfo").setVisible(false);
		this.getView().byId("pgwel").setVisible(false);
		this.getView().byId("pgtsentry").setVisible(false);
		this.getView().byId("pglogin").setVisible(false);
	},
	
	fnnavpgwel : function(){
		this.getView().byId("pgwel").setVisible(true);
		this.getView().byId("pgprsnlinfo").setVisible(false);
		this.getView().byId("pgtsentry").setVisible(false);
		this.getView().byId("pglogin").setVisible(false);
	},

//	...............................Employee personal details.....................................................

	fnempid : function(){
		thisRef=this;
		var empid = thisRef.getView().byId("inempid").getValue();
		var regex=/^[0-9]+$/
			if(empid=='')
			{
				thisRef.getView().byId("inempid").setValueState("Error")
				thisRef.getView().byId("inempid").setValueStateText("Please enter employee ID")
				thisRef.getView().byId("inempid").setTooltip("Please enter employee ID")
			}
			else if(!empid.match(regex))
			{
				thisRef.getView().byId("inempid").setValueState("Error")
				thisRef.getView().byId("inempid").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inempid").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inempid").setValueState("None")
				thisRef.getView().byId("inempid").setValueStateText("")
				thisRef.getView().byId("inempid").setTooltip("")

			}

	},

	fnfname : function(){
		thisRef=this;
		var fname = thisRef.getView().byId("infname").getValue();
		var regex=/^[A-z]+$/
			if(fname=='')
			{
				thisRef.getView().byId("infname").setValueState("Error")
				thisRef.getView().byId("infname").setValueStateText("Please enter first name")
				thisRef.getView().byId("infname").setTooltip("Please enter first name")
			}
			else if(!fname.match(regex))
			{
				thisRef.getView().byId("infname").setValueState("Error")
				thisRef.getView().byId("infname").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("infname").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("infname").setValueState("None")
				thisRef.getView().byId("infname").setValueStateText("")
				thisRef.getView().byId("infname").setTooltip("")

			}

	},

	fnlname : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var lname = thisRef.getView().byId("inlname").getValue();
		if(lname=='')
		{
			thisRef.getView().byId("inlname").setValueState("Error")
			thisRef.getView().byId("inlname").setValueStateText("Please enter last name")
			thisRef.getView().byId("inlname").setTooltip("Please enter last name")
		}
		else if(!lname.match(regex))
		{
			thisRef.getView().byId("inlname").setValueState("Error")
			thisRef.getView().byId("inlname").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("inlname").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("inlname").setValueState("None")
			thisRef.getView().byId("inlname").setValueStateText("")
			thisRef.getView().byId("inlname").setTooltip("")

		}

	},

	fngender : function(){
		thisRef=this;
		var male  = thisRef.getView().byId("rbmale").getSelected();
		var female= thisRef.getView().byId("rbfemale").getSelected();

		if(male==false & female==false)
		{
			thisRef.getView().byId("rbmale").setValueState("Error")
			thisRef.getView().byId("rbmale").setTooltip("Please select gender")

			thisRef.getView().byId("rbfemale").setValueState("Error")
			thisRef.getView().byId("rbfemale").setTooltip("Please select gender")
		}else
		{
			thisRef.getView().byId("rbmale").setValueState("None");
			thisRef.getView().byId("rbmale").setTooltip("")

			thisRef.getView().byId("rbfemale").setValueState("None");
			thisRef.getView().byId("rbfemale").setTooltip("")

		}
	},

	fnbsloc : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var bsloc = thisRef.getView().byId("inbsloc").getValue();
		if(bsloc=='')
		{
			thisRef.getView().byId("inbsloc").setValueState("Error")
			thisRef.getView().byId("inbsloc").setValueStateText("Please enter base location")
			thisRef.getView().byId("inbsloc").setTooltip("Please enter last name")
		}
		else if(!bsloc.match(regex))
		{
			thisRef.getView().byId("inbsloc").setValueState("Error")
			thisRef.getView().byId("inbsloc").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("inbsloc").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("inbsloc").setValueState("None")
			thisRef.getView().byId("inbsloc").setValueStateText("")
			thisRef.getView().byId("inbsloc").setTooltip("")

		}

	},

	fndesg : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var desg = thisRef.getView().byId("indesg").getValue();
		if(desg=='')
		{
			thisRef.getView().byId("indesg").setValueState("Error")
			thisRef.getView().byId("indesg").setValueStateText("Please enter designation")
			thisRef.getView().byId("indesg").setTooltip("Please enter designation")
		}
		else if(!desg.match(regex))
		{
			thisRef.getView().byId("indesg").setValueState("Error")
			thisRef.getView().byId("indesg").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("indesg").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("indesg").setValueState("None")
			thisRef.getView().byId("indesg").setValueStateText("")
			thisRef.getView().byId("indesg").setTooltip("")

		}

	},

	fncmpt : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var cmpt = thisRef.getView().byId("incmpt").getValue();
		if(cmpt=='')
		{
			thisRef.getView().byId("incmpt").setValueState("Error")
			thisRef.getView().byId("incmpt").setValueStateText("Please enter competency")
			thisRef.getView().byId("incmpt").setTooltip("Please enter competency")
		}
		else if(!cmpt.match(regex))
		{
			thisRef.getView().byId("incmpt").setValueState("Error")
			thisRef.getView().byId("incmpt").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("incmpt").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("incmpt").setValueState("None")
			thisRef.getView().byId("incmpt").setValueStateText("")
			thisRef.getView().byId("incmpt").setTooltip("")

		}

	},

	fnrptng : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var rptng = thisRef.getView().byId("inrptng").getValue();

		if(!rptng.match(regex))
		{
			thisRef.getView().byId("inrptng").setValueState("Error")
			thisRef.getView().byId("inrptng").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("inrptng").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("inrptng").setValueState("None")
			thisRef.getView().byId("inrptng").setValueStateText("")
			thisRef.getView().byId("inrptng").setTooltip("")

		}

	},

//	.................................Addresses................................................

	fnckbox : function(){
		thisRef=this;
		var ckbox=thisRef.getView().byId("addckbox").getSelected();
		if(ckbox==true)
		{
			var add1=thisRef.getView().byId("inadd1c").getValue();
			var add2=thisRef.getView().byId("inadd2c").getValue();
			var cityc = thisRef.getView().byId("incityc").getValue();
			var postalc = thisRef.getView().byId("inpostalc").getValue();
			var countryc = thisRef.getView().byId("secountryc").getSelectedItem();
			var regionc = thisRef.getView().byId("seregionc").getSelectedItem();

			thisRef.getView().byId("inadd1p").setValue(add1);
			thisRef.getView().byId("inadd2p").setValue(add2);
			thisRef.getView().byId("incityp").setValue(cityc);
			thisRef.getView().byId("inpostalp").setValue(postalc);
			thisRef.getView().byId("secountryp").setSelectedItem(countryc);
			thisRef.getView().byId("seregionp").setSelectedItem(regionc);
		}else{
			thisRef.getView().byId("inadd1p").setValue('');
			thisRef.getView().byId("inadd2p").setValue('');
			thisRef.getView().byId("incityp").setValue('');
			thisRef.getView().byId("inpostalp").setValue('');
			thisRef.getView().byId("secountryp").setValue('');
			thisRef.getView().byId("seregionp").setValue('');
		}
	},

	fncityc : function(){
		thisRef=this;
		var cityc = thisRef.getView().byId("incityc").getValue();
		var regex=/^[A-z]+$/
			if(cityc=='')
			{
				thisRef.getView().byId("incityc").setValueState("Error")
				thisRef.getView().byId("incityc").setValueStateText("Please enter first city")
				thisRef.getView().byId("incityc").setTooltip("Please enter city")
			}
			else if(!cityc.match(regex))
			{
				thisRef.getView().byId("incityc").setValueState("Error")
				thisRef.getView().byId("incityc").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("incityc").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("incityc").setValueState("None")
				thisRef.getView().byId("incityc").setValueStateText("")
				thisRef.getView().byId("incityc").setTooltip("")

			}

	},

	fncityp : function(){
		thisRef=this;
		var cityp = thisRef.getView().byId("incityp").getValue();
		var regex=/^[A-z]+$/
			if(cityp=='')
			{
				thisRef.getView().byId("incityp").setValueState("Error")
				thisRef.getView().byId("incityp").setValueStateText("Please enter city")
				thisRef.getView().byId("incityp").setTooltip("Please enter city")
			}
			else if(!cityp.match(regex))
			{
				thisRef.getView().byId("incityp").setValueState("Error")
				thisRef.getView().byId("incityp").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("incityp").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("incityp").setValueState("None")
				thisRef.getView().byId("incityp").setValueStateText("")
				thisRef.getView().byId("incityp").setTooltip("")

			}

	},

	fnpostalc : function(){
		thisRef=this;
		var postalc = thisRef.getView().byId("inpostalc").getValue();
		var regex=/^[0-9]+$/
			if(postalc=='')
			{
				thisRef.getView().byId("inpostalc").setValueState("Error")
				thisRef.getView().byId("inpostalc").setValueStateText("Please enter postal code")
				thisRef.getView().byId("inpostalc").setTooltip("Please enter postal code")
			}
			else if(!postalc.match(regex))
			{
				thisRef.getView().byId("inpostalc").setValueState("Error")
				thisRef.getView().byId("inpostalc").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inpostalc").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inpostalc").setValueState("None")
				thisRef.getView().byId("inpostalc").setValueStateText("")
				thisRef.getView().byId("inpostalc").setTooltip("")

			}

	},

	fnpostalp : function(){
		thisRef=this;
		var postalp = thisRef.getView().byId("inpostalp").getValue();
		var regex=/^[0-9]+$/
			if(postalp=='')
			{
				thisRef.getView().byId("inpostalp").setValueState("Error")
				thisRef.getView().byId("inpostalp").setValueStateText("Please enter postal code")
				thisRef.getView().byId("inpostalp").setTooltip("Please enter postal code")
			}
			else if(!postalp.match(regex))
			{
				thisRef.getView().byId("inpostalp").setValueState("Error")
				thisRef.getView().byId("inpostalp").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inpostalp").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inpostalp").setValueState("None")
				thisRef.getView().byId("inpostalp").setValueStateText("")
				thisRef.getView().byId("inpostalp").setTooltip("")

			}

	},

	fncountryc : function(){
		thisRef=this;
		var countryc = thisRef.getView().byId("secountryc").getSelectedIndex();
		if(countryc=='')
		{

			thisRef.getView().byId("secountryc").setValueState("Error")
			thisRef.getView().byId("secountryc").setValueStateText("Please select country ")
			thisRef.getView().byId("secountryc").setTooltip("Please select country")


		}
		else
		{
			thisRef.getView().byId("secountryc").setValueState("None")
			thisRef.getView().byId("secountryc").setValueStateText("")
			thisRef.getView().byId("secountryc").setTooltip("")

		}
	},

	fncountryp : function(){
		thisRef=this;
		var countryp = thisRef.getView().byId("secountryp").getSelectedIndex();
		if(countryp=='')
		{

			thisRef.getView().byId("secountryp").setValueState("Error")
			thisRef.getView().byId("secountryp").setValueStateText("Please select country ")
			thisRef.getView().byId("secountryp").setTooltip("Please select country")


		}
		else
		{
			thisRef.getView().byId("secountryp").setValueState("None")
			thisRef.getView().byId("secountryp").setValueStateText("")
			thisRef.getView().byId("secountryp").setTooltip("")

		}
	},

	fnregionc : function(){
		thisRef=this;
		var regionc = thisRef.getView().byId("seregionc").getSelectedIndex();
		if(regionc=='')
		{

			thisRef.getView().byId("seregionc").setValueState("Error")
			thisRef.getView().byId("seregionc").setValueStateText("Please select region ")
			thisRef.getView().byId("seregionc").setTooltip("Please select region")


		}
		else
		{
			thisRef.getView().byId("seregionc").setValueState("None")
			thisRef.getView().byId("seregionc").setValueStateText("")
			thisRef.getView().byId("seregionc").setTooltip("")

		}
	},
	fnregionp : function(){
		thisRef=this;
		var regionp = thisRef.getView().byId("seregionp").getSelectedIndex();
		if(regionp=='')
		{

			thisRef.getView().byId("seregionp").setValueState("Error")
			thisRef.getView().byId("seregionp").setValueStateText("Please select region ")
			thisRef.getView().byId("seregionp").setTooltip("Please select region")


		}
		else
		{
			thisRef.getView().byId("seregionp").setValueState("None")
			thisRef.getView().byId("seregionp").setValueStateText("")
			thisRef.getView().byId("seregionp").setTooltip("")

		}
	},

	fnemgprsn : function(){
		thisRef=this;
		var emgprsn = thisRef.getView().byId("inemgprsn").getValue();
		var regex=/^[A-z]+$/
			if(emgprsn=='')
			{
				thisRef.getView().byId("inemgprsn").setValueState("Error")
				thisRef.getView().byId("inemgprsn").setValueStateText("Please enter emergency person name")
				thisRef.getView().byId("inemgprsn").setTooltip("Please enter emergency person name")
			}
			else if(!emgprsn.match(regex))
			{
				thisRef.getView().byId("inemgprsn").setValueState("Error")
				thisRef.getView().byId("inemgprsn").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("inemgprsn").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("inemgprsn").setValueState("None")
				thisRef.getView().byId("inemgprsn").setValueStateText("")
				thisRef.getView().byId("inemgprsn").setTooltip("")

			}

	},

	fnemgno : function(){
		thisRef=this;
		var emgno = thisRef.getView().byId("inemgno").getValue();
		var regex=/^[0-9]+$/
			if(emgno=='')
			{
				thisRef.getView().byId("inemgno").setValueState("Error")
				thisRef.getView().byId("inemgno").setValueStateText("Please enter emergency number")
				thisRef.getView().byId("inemgno").setTooltip("Please enter emergency number")
			}
			else if(!emgno.match(regex))
			{
				thisRef.getView().byId("inemgno").setValueState("Error")
				thisRef.getView().byId("inemgno").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inemgno").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inemgno").setValueState("None")
				thisRef.getView().byId("inemgno").setValueStateText("")
				thisRef.getView().byId("inemgno").setTooltip("")

			}

	},

//	..............................................Family Details.............................................

	fnmtfname : function(){
		thisRef=this;
		var mtfname = thisRef.getView().byId("inmtfname").getValue();
		var regex=/^[A-z]+$/
			if(mtfname=='')
			{
				thisRef.getView().byId("inmtfname").setValueState("Error")
				thisRef.getView().byId("inmtfname").setValueStateText("Please enter first name")
				thisRef.getView().byId("inmtfname").setTooltip("Please enter first name")
			}
			else if(!mtfname.match(regex))
			{
				thisRef.getView().byId("inmtfname").setValueState("Error")
				thisRef.getView().byId("inmtfname").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("inmtfname").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("inmtfname").setValueState("None")
				thisRef.getView().byId("inmtfname").setValueStateText("")
				thisRef.getView().byId("inmtfname").setTooltip("")

			}

	},

	fnmtlname : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var mtlname = thisRef.getView().byId("inmtlname").getValue();
		if(mtlname=='')
		{
			thisRef.getView().byId("inmtlname").setValueState("Error")
			thisRef.getView().byId("inmtlname").setValueStateText("Please enter last name")
			thisRef.getView().byId("inmtlname").setTooltip("Please enter last name")
		}
		else if(!mtlname.match(regex))
		{
			thisRef.getView().byId("inmtlname").setValueState("Error")
			thisRef.getView().byId("inmtlname").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("inmtlname").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("inmtlname").setValueState("None")
			thisRef.getView().byId("inmtlname").setValueStateText("")
			thisRef.getView().byId("inmtlname").setTooltip("")

		}

	},

	fnftfname : function(){
		thisRef=this;
		var ftfname = thisRef.getView().byId("inftfname").getValue();
		var regex=/^[A-z]+$/
			if(ftfname=='')
			{
				thisRef.getView().byId("inftfname").setValueState("Error")
				thisRef.getView().byId("inftfname").setValueStateText("Please enter first name")
				thisRef.getView().byId("inftfname").setTooltip("Please enter first name")
			}
			else if(!ftfname.match(regex))
			{
				thisRef.getView().byId("inftfname").setValueState("Error")
				thisRef.getView().byId("inftfname").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("inftfname").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("inftfname").setValueState("None")
				thisRef.getView().byId("inftfname").setValueStateText("")
				thisRef.getView().byId("inftfname").setTooltip("")

			}

	},

	fnftlname : function(){
		thisRef=this;
		var regex=/^[A-z]+$/
			var ftlname = thisRef.getView().byId("inftlname").getValue();
		if(ftlname=='')
		{
			thisRef.getView().byId("inftlname").setValueState("Error")
			thisRef.getView().byId("inftlname").setValueStateText("Please enter last name")
			thisRef.getView().byId("inftlname").setTooltip("Please enter last name")
		}
		else if(!ftlname.match(regex))
		{
			thisRef.getView().byId("inftlname").setValueState("Error")
			thisRef.getView().byId("inftlname").setValueStateText("only alphabets allowed")
			thisRef.getView().byId("inftlname").setTooltip("only alphabets allowed")
		}
		else
		{
			thisRef.getView().byId("inftlname").setValueState("None")
			thisRef.getView().byId("inftlname").setValueStateText("")
			thisRef.getView().byId("inftlname").setTooltip("")

		}

	},

//	....................................Communication.............................................
	fniemailid : function(){
		thisRef=this;
		var iemailid = thisRef.getView().byId("iniemailid").getValue();
		var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(iemailid=='')
		{
			thisRef.getView().byId("iniemailid").setValueState("Error")
			thisRef.getView().byId("iniemailid").setValueStateText("Please enter first name")
			thisRef.getView().byId("iniemailid").setTooltip("Please enter first name")
		}
		else if(!iemailid.match(regex))
		{
			thisRef.getView().byId("iniemailid").setValueState("Error")
			thisRef.getView().byId("iniemailid").setValueStateText("Enter valid email id")
			thisRef.getView().byId("iniemailid").setTooltip("enter valid email id")
		}
		else
		{
			thisRef.getView().byId("iniemailid").setValueState("None")
			thisRef.getView().byId("iniemailid").setValueStateText("")
			thisRef.getView().byId("iniemailid").setTooltip("")

		}

	},

	fnpemailid : function(){
		thisRef=this;
		var pemailid = thisRef.getView().byId("inpemailid").getValue();
		var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(pemailid=='')
		{
			thisRef.getView().byId("inpemailid").setValueState("Error")
			thisRef.getView().byId("inpemailid").setValueStateText("Please enter first name")
			thisRef.getView().byId("inpemailid").setTooltip("Please enter first name")
		}
		else if(!pemailid.match(regex))
		{
			thisRef.getView().byId("inpemailid").setValueState("Error")
			thisRef.getView().byId("inpemailid").setValueStateText("Enter valid email id")
			thisRef.getView().byId("inpemailid").setTooltip("enter valid email id")
		}
		else
		{
			thisRef.getView().byId("inpemailid").setValueState("None")
			thisRef.getView().byId("inpemailid").setValueStateText("")
			thisRef.getView().byId("inpemailid").setTooltip("")

		}

	},

	fnmob : function(){
		thisRef=this;
		var mob = thisRef.getView().byId("inmob").getValue();
		var regex=/^[0-9]+$/
			if(mob=='')
			{
				thisRef.getView().byId("inmob").setValueState("Error")
				thisRef.getView().byId("inmob").setValueStateText("Please enter mobile no")
				thisRef.getView().byId("inmob").setTooltip("Please enter mobile no")
			}
			else if(!mob.match(regex))
			{
				thisRef.getView().byId("inmob").setValueState("Error")
				thisRef.getView().byId("inmob").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inmob").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inmob").setValueState("None")
				thisRef.getView().byId("inmob").setValueStateText("")
				thisRef.getView().byId("inmob").setTooltip("")

			}

	},

//	..................................Bank Details.......................................

	fnbank : function(){
		thisRef=this;
		var bank = thisRef.getView().byId("inbank").getValue();
		var regex=/^[A-z]+$/
			if(bank=='')
			{
				thisRef.getView().byId("inbank").setValueState("Error")
				thisRef.getView().byId("inbank").setValueStateText("Please enter bank name")
				thisRef.getView().byId("inbank").setTooltip("Please enter bank name")
			}
			else if(!bank.match(regex))
			{
				thisRef.getView().byId("inbank").setValueState("Error")
				thisRef.getView().byId("inbank").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("inbank").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("inbank").setValueState("None")
				thisRef.getView().byId("inbank").setValueStateText("")
				thisRef.getView().byId("inbank").setTooltip("")

			}

	},

	fnacno : function(){
		thisRef=this;
		var acno = thisRef.getView().byId("inacno").getValue();
		var regex=/^[0-9]+$/
			if(acno=='')
			{
				thisRef.getView().byId("inacno").setValueState("Error")
				thisRef.getView().byId("inacno").setValueStateText("Please enter account no")
				thisRef.getView().byId("inacno").setTooltip("Please enter account no")
			}
			else if(!acno.match(regex))
			{
				thisRef.getView().byId("inacno").setValueState("Error")
				thisRef.getView().byId("inacno").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inacno").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inacno").setValueState("None")
				thisRef.getView().byId("inacno").setValueStateText("")
				thisRef.getView().byId("inacno").setTooltip("")

			}

	},

//	..................................Identification........................................................

	fnpsno : function(){
		thisRef=this;
		var psno = thisRef.getView().byId("inpsno").getValue();
		var regex=/^[0-9]+$/
			if(psno=='')
			{
				thisRef.getView().byId("inpsno").setValueState("Error")
				thisRef.getView().byId("inpsno").setValueStateText("Please enter passport no")
				thisRef.getView().byId("inpsno").setTooltip("Please enter passport no")
			}
			else if(!psno.match(regex))
			{
				thisRef.getView().byId("inpsno").setValueState("Error")
				thisRef.getView().byId("inpsno").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inpsno").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inpsno").setValueState("None")
				thisRef.getView().byId("inpsno").setValueStateText("")
				thisRef.getView().byId("inpsno").setTooltip("")

			}

	},

	fnisplace : function(){
		thisRef=this;
		var isplace = thisRef.getView().byId("inisplace").getValue();
		var regex=/^[A-z]+$/
			if(isplace=='')
			{
				thisRef.getView().byId("inisplace").setValueState("Error")
				thisRef.getView().byId("inisplace").setValueStateText("Please enter issue place name")
				thisRef.getView().byId("inisplace").setTooltip("Please enter issue place name")
			}
			else if(!isplace.match(regex))
			{
				thisRef.getView().byId("inisplace").setValueState("Error")
				thisRef.getView().byId("inisplace").setValueStateText("only alphabets allowed")
				thisRef.getView().byId("inisplace").setTooltip("only alphabets allowed")
			}
			else
			{
				thisRef.getView().byId("inisplace").setValueState("None")
				thisRef.getView().byId("inisplace").setValueStateText("")
				thisRef.getView().byId("inisplace").setTooltip("")

			}

	},

	fnadhar : function(){
		thisRef=this;
		var adhar = thisRef.getView().byId("inadhar").getValue();
		var regex=/^[0-9]+$/
			if(adhar=='')
			{
				thisRef.getView().byId("inadhar").setValueState("Error")
				thisRef.getView().byId("inadhar").setValueStateText("Please enter aadhar no")
				thisRef.getView().byId("inadhar").setTooltip("Please enter aadhar no")
			}
			else if(!adhar.match(regex))
			{
				thisRef.getView().byId("inadhar").setValueState("Error")
				thisRef.getView().byId("inadhar").setValueStateText("only numbers allowed")
				thisRef.getView().byId("inadhar").setTooltip("only numbers allowed")
			}
			else
			{
				thisRef.getView().byId("inadhar").setValueState("None")
				thisRef.getView().byId("inadhar").setValueStateText("")
				thisRef.getView().byId("inadhar").setTooltip("")

			}

	},

	fnpanno : function(){
		thisRef=this;
		var panno = thisRef.getView().byId("inpanno").getValue();
		var regex="^[a-zA-Z0-9]*$"	;

		if(panno=='')
		{
			thisRef.getView().byId("inpanno").setValueState("Error")
			thisRef.getView().byId("inpanno").setValueStateText("Please enter PAN no")
			thisRef.getView().byId("inpanno").setTooltip("Please enter PAN no")
		}
		else if(!panno.match(regex))
		{
			thisRef.getView().byId("inpanno").setValueState("Error")
			thisRef.getView().byId("inpanno").setValueStateText("Enter valid PAN no")
			thisRef.getView().byId("inpanno").setTooltip("enter valid PAN no")
		}
		else
		{
			thisRef.getView().byId("inpanno").setValueState("None")
			thisRef.getView().byId("inpanno").setValueStateText("")
			thisRef.getView().byId("inpanno").setTooltip("")

		}

	},

	fnpfno : function(){
		thisRef=this;
		var pfno = thisRef.getView().byId("inpfno").getValue();
		var regex="^[a-zA-Z0-9]*$"	;

		if(pfno=='')
		{
			thisRef.getView().byId("inpfno").setValueState("Error")
			thisRef.getView().byId("inpfno").setValueStateText("Please enter PF no")
			thisRef.getView().byId("inpfno").setTooltip("Please enter PF no")
		}
		else if(!pfno.match(regex))
		{
			thisRef.getView().byId("inpfno").setValueState("Error")
			thisRef.getView().byId("inpfno").setValueStateText("Enter valid PF no")
			thisRef.getView().byId("inpfno").setTooltip("enter valid PF no")
		}
		else
		{
			thisRef.getView().byId("inpfno").setValueState("None")
			thisRef.getView().byId("inpfno").setValueStateText("")
			thisRef.getView().byId("inpfno").setTooltip("")

		}

	},

	fnbdgrp1 : function(){
		thisRef=this;
		var bdgrp1 = thisRef.getView().byId("sebdgrp1").getSelectedIndex();
		if(bdgrp1=='')
		{

			thisRef.getView().byId("sebdgrp1").setValueState("Error")
			thisRef.getView().byId("sebdgrp1").setValueStateText("Please select blood group ")
			thisRef.getView().byId("sebdgrp1").setTooltip("Please select blood group")


		}
		else
		{
			thisRef.getView().byId("sebdgrp1").setValueState("None")
			thisRef.getView().byId("sebdgrp1").setValueStateText("")
			thisRef.getView().byId("sebdgrp1").setTooltip("")

		}
	},

	fnbdgrp2 : function(){
		thisRef=this;
		var bdgrp2 = thisRef.getView().byId("sebdgrp2").getSelectedIndex();
		if(bdgrp2=='')
		{

			thisRef.getView().byId("sebdgrp2").setValueState("Error")
			thisRef.getView().byId("sebdgrp2").setValueStateText("Please select blood group ")
			thisRef.getView().byId("sebdgrp2").setTooltip("Please select blood group")


		}
		else
		{
			thisRef.getView().byId("sebdgrp2").setValueState("None")
			thisRef.getView().byId("sebdgrp2").setValueStateText("")
			thisRef.getView().byId("sebdgrp2").setTooltip("")

		}
	},

//	.................................TimeSheet Entry..........................................
	fnmasteropen : function(){

		this.getView().byId("sconts").setMode("ShowHideMode")
	},

	fnmasterclose : function(){
		this.getView().byId("sconts").setMode("HideMode")
	},

	fncal : function(){
		thisRef=this;
		var date = thisRef.getView().byId("cal").getSelectedDates();
		if(date!='')
		{
			thisRef.getView().byId("seproject").setVisible(true);
			thisRef.getView().byId("seobject").setVisible(true);
			thisRef.getView().byId("seactivity").setVisible(true);
			thisRef.getView().byId("secountryt").setVisible(true);
			thisRef.getView().byId("inactvdesc").setVisible(true);
			thisRef.getView().byId("incallno").setVisible(true);
			thisRef.getView().byId("btnsubmit").setVisible(true);

		}
	},

	fnproject : function(){
		thisRef=this;
		var project = thisRef.getView().byId("seproject").getSelectedIndex();
		if(project=='')
		{

			thisRef.getView().byId("seproject").setValueState("Error")
			thisRef.getView().byId("seproject").setValueStateText("Please select project ")
			thisRef.getView().byId("seproject").setTooltip("Please select project")


		}
		else
		{
			thisRef.getView().byId("seproject").setValueState("None")
			thisRef.getView().byId("seproject").setValueStateText("")
			thisRef.getView().byId("seproject").setTooltip("")

		}
	},

	fnobject : function(){
		thisRef=this;
		var object = thisRef.getView().byId("seobject").getSelectedIndex();
		if(object=='')
		{

			thisRef.getView().byId("seobject").setValueState("Error")
			thisRef.getView().byId("seobject").setValueStateText("Please select object ")
			thisRef.getView().byId("seobject").setTooltip("Please select object")


		}
		else
		{
			thisRef.getView().byId("seobject").setValueState("None")
			thisRef.getView().byId("seobject").setValueStateText("")
			thisRef.getView().byId("seobject").setTooltip("")

		}
	},

	fnactivity : function(){
		thisRef=this;
		var activity = thisRef.getView().byId("seactivity").getSelectedIndex();
		if(activity=='')
		{

			thisRef.getView().byId("seactivity").setValueState("Error")
			thisRef.getView().byId("seactivity").setValueStateText("Please select activity ")
			thisRef.getView().byId("seactivity").setTooltip("Please select activity")


		}
		else
		{
			thisRef.getView().byId("seactivity").setValueState("None")
			thisRef.getView().byId("seactivity").setValueStateText("")
			thisRef.getView().byId("seactivity").setTooltip("")

		}
	},

	fncountryt : function(){
		thisRef=this;
		var countryt = thisRef.getView().byId("secountryt").getSelectedIndex();
		if(countryt=='')
		{

			thisRef.getView().byId("secountryt").setValueState("Error")
			thisRef.getView().byId("secountryt").setValueStateText("Please select country ")
			thisRef.getView().byId("secountryt").setTooltip("Please select country")


		}
		else
		{
			thisRef.getView().byId("secountryt").setValueState("None")
			thisRef.getView().byId("secountryt").setValueStateText("")
			thisRef.getView().byId("secountryt").setTooltip("")

		}
	},

	fnsubmit :function(){
		thisRef=this;
		thisRef.getView().byId("tab1").setModel(entryModel)
		var cal=thisRef.getView().byId("cal")
		var project = thisRef.getView().byId("seproject").getSelectedItem().getText();
		var object = thisRef.getView().byId("seobject").getSelectedItem().getText();
		var activity = thisRef.getView().byId("seactivity").getSelectedItem().getText();
		var country = thisRef.getView().byId("secountryt").getSelectedItem().getText();
		var date = thisRef.getView().byId("cal").getSelectedDates();
		var desc=thisRef.getView().byId("inactvdesc").getValue();

		if(project=='')
		{
			thisRef.getView().byId("seproject").setValueState("Error")
			thisRef.getView().byId("seproject").setValueStateText("Please select Project ")
			thisRef.getView().byId("seproject").setTooltip("Please select Project")
		}

		if(object=='')
		{
			thisRef.getView().byId("seobject").setValueState("Error")
			thisRef.getView().byId("seobject").setValueStateText("Please select Object ")
			thisRef.getView().byId("seobject").setTooltip("Please select Object")
		}

		if(activity=='')
		{
			thisRef.getView().byId("seactivity").setValueState("Error")
			thisRef.getView().byId("seactivity").setValueStateText("Please select Activity ")
			thisRef.getView().byId("seactivity").setTooltip("Please select activity")
		}

		if(country=='')
		{
			thisRef.getView().byId("secountryt").setValueState("Error")
			thisRef.getView().byId("secountryt").setValueStateText("Please select country ")
			thisRef.getView().byId("secountryt").setTooltip("Please select country")
		}

		var err=0;
		if(thisRef.getView().byId("seproject").getValueState()=="Error")
			err++;
		if(thisRef.getView().byId("seobject").getValueState()=="Error")
			err++;
		if(thisRef.getView().byId("seactivity").getValueState()=="Error")
			err++;
		if(thisRef.getView().byId("secountryt").getValueState()=="Error")
			err++;
		if(date=='')
			err++;
		if(err==0)
		{
			var date1 =sap.ui.core.format.DateFormat.getDateInstance().format(date[0].getStartDate());
			var entry=entryModel.getProperty("/entry")
			var newEntry={ 

				"Date" :date1,
				"Location":"",
				"Project":project,
				"Country":country,
				"Object":object,
				"CR" :"",
				"Activity" :activity,
				"Time" :"",
				"Activity_Desc" : desc
			}
			entry.push(newEntry)
			entryModel.setProperty("/entry",entry);

			cal.addSpecialDate(new sap.ui.unified.DateTypeRange({
				startDate : new Date(date1),
				type : "Type01"
			}))
		}
	},

	fnbtncopy : function(){
		thisRef=this;
		thisRef.getView().byId("tab1").setModel(entryModel)
		var table=thisRef.getView().byId("tab1")
		var item=table.getSelectedItem()
		var index=table.indexOfItem(item)
		if(index==-1)
		{
			var dialog = new sap.m.Dialog({
				title: 'Error',
				type: 'Message',
				state: 'Error',
				content: new sap.m.Text({
					text: 'Please select a row to copy'
				}),
				beginButton: new sap.m.Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();		
		}	
		else{
			var Items = table.getSelectedItems();

			for(var i=0;i<Items.length;i++){

				var date = Items[i].getBindingContext().getProperty("Date");
				var project = Items[i].getBindingContext().getProperty("Project");
				var country = Items[i].getBindingContext().getProperty("Country");
				var object = Items[i].getBindingContext().getProperty("Object");
				var activity = Items[i].getBindingContext().getProperty("Activity");
				var desc = Items[i].getBindingContext().getProperty("Activity_Desc");

				var entry=entryModel.getProperty("/entry")
				var newEntry={ 	
					"Date" :date,
					"Location":"",
					"Project":project,
					"Country":country,
					"Object":object,
					"CR" :"",
					"Activity" :activity,
					"Time" :"",
					"Activity_Desc" : desc
				}
				entry.push(newEntry)
				entryModel.setProperty("/entry",entry);
			}
		}
	},

	fnbtndel : function(){
		thisRef=this;
		thisRef.getView().byId("tab1").setModel(entryModel)
		var table=thisRef.getView().byId("tab1")
		var item=table.getSelectedItem()
		var index=table.indexOfItem(item)
		if(index==-1)
		{
			var dialog = new sap.m.Dialog({
				title: 'Error',
				type: 'Message',
				state: 'Error',
				content: new sap.m.Text({
					text: 'Please select a row to delete'
				}),
				beginButton: new sap.m.Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();		
		}	
		else{
			var Items = table.getSelectedItems();
			var entry=entryModel.getProperty("/entry")
			entry.splice(index,Items.length)
			entryModel.setProperty("/entry",entry);
		}
	},

	fnbtnsave : function(){
		thisRef=this;
		thisRef.getView().byId("tab1").setModel(entryModel)
		var cal=thisRef.getView().byId("cal")
		var table=thisRef.getView().byId("tab1")
		var item=table.getSelectedItem()

		var index=table.indexOfItem(item)
		if(index==-1)
		{
			var dialog = new sap.m.Dialog({
				title: 'Error',
				type: 'Message',
				state: 'Error',
				content: new sap.m.Text({
					text: 'Please select a row to save'
				}),
				beginButton: new sap.m.Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();		
		}
		else{
			var dialog = new sap.m.Dialog({
				title: 'Success',
				type: 'Message',
				state: 'Success',
				content: new sap.m.Text({
					text: 'Details saved into database'
				}),
				beginButton: new sap.m.Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();				
		}
	},

//	................................................Employee Details Page..............................................
	
	fnmasteropenemp : function(){

		this.getView().byId("sconemp").setMode("ShowHideMode")
	}
	,
	
	fnnavpgemp1 : function(){
		this.getView().byId("sconemp").to(this.createId("pgemp1"));
	},

	fnnavpgemp2 : function(){
		this.getView().byId("sconemp").to(this.createId("pgemp2"));
	},

	fnnavpgemp3 : function(){
		this.getView().byId("sconemp").to(this.createId("pgemp3"));
	},

	fnnavpgmng : function(){
		this.getView().byId("sconemp").to(this.createId("pgmng"));
	},

	fndisplayemp : function(oEvent){

		var employeeModel=new sap.ui.model.json.JSONModel();
		employeeModel.loadData("json/employee.json","",false)

		var empdata=employeeModel.getProperty("/employee")
		var empid=oEvent.getParameter("listItem").getCustomData()[0].getValue()
		var found=0
		for(var i=0;i<empdata.length;i++)
		{
			if(empdata[i].empid==empid)
			{
				found=1;
				employeeModel.setData(empdata[i])
				sap.ui.getCore().setModel(employeeModel,"employee")
			}
		}
		if(found==0)
			sap.m.MessageBox.error("Sorry! Employee data not added")

	}
});