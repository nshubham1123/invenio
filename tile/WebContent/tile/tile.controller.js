sap.ui.define(["sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],
		function(MessageBox,Controller, History,MessageToast){
	sap.ui.controller("tile.tile", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf movie.mv
		 */
		onInit: function() {

			thisRef= this;


			var oModel1 = new sap.ui.model.json.JSONModel()
			thisRef.getView().setModel(oModel1);
			thisRef.byId("dp1").setMinDate(new Date());
			thisRef.byId("dp1").setMaxDate(new Date(2018,7,31));

			thisRef.byId("dp2").setMinDate(new Date());
			thisRef.byId("dp2").setMaxDate(new Date(2023,11,31));

			var oModel3 = new sap.ui.model.json.JSONModel();
			oModel3.loadData("bank.json");
			this.getView().byId("selBank").setModel(oModel3);


			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("city.json");
			this.getView().setModel(oModel);

			var oModel2 = new sap.ui.model.json.JSONModel();
			oModel2.loadData("number.json");
			this.getView().byId("selSeat").setModel(oModel2);


			var oScreen = new sap.ui.model.json.JSONModel();
			oScreen.setData({
				"Screen":[
					{
						"Screen":""
					},
					{
						"Screen":"Screen-1"
					},
					{
						"Screen":"Screen-2"
					},
					{
						"Screen":"Screen-3"
					},
					{
						"Screen":"Screen-4"
					}
					]
			});
			this.getView().byId("selScreen").setModel( oScreen);



		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf movie.mv
		 */
//		onBeforeRendering: function() {

//		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf movie.mv
		 */
//		onAfterRendering: function() {

//		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf movie.mv
		 */
//		onExit: function() {

//		}
		onShowView:function(oEvent){

			this.getView().byId("p4").setVisible(true);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);

		},


		onShowView1: function(oEvent) {

			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(true);

		},


		onShowView2: function(oEvent) {
			
			this.getView().byId("p3").setVisible(true);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			
			},

		onShowView3: function(oEvent) {
			/*var uname=thisRef.getView().byId("Uname").getValue()
			this.getView().byId("p7").setVisible(true);
			this.getView().byId("p8").setVisible(false);
			this.getView().byId("CreditCardStep").setVisible(false);
			this.getView().byId("NetB").setVisible(false);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);
			this.getView().byId("p5").setVisible(false);
			this.getView().byId("p6").setVisible(false);
			this.getView().byId("p9").setVisible(false);
			
			 thisRef.getView().byId("date").setText(+uname)
*/
			var uname=thisRef.getView().byId("Uname").getValue()
			var pd=thisRef.getView().byId("pd").getValue()
			var email=thisRef.getView().byId("EId").getValue()
			var pwd=thisRef.getView().byId("ipwd").getValue()

			if(uname=='' && pd=='')
			{
				MessageBox.error("Please Enter Username or Password")
			}
			else if(uname==email && pd==pwd)

			{
				this.getView().byId("p4").setVisible(true);
				this.getView().byId("p1").setVisible(false);
				this.getView().byId("p2").setVisible(false);
				this.getView().byId("p3").setVisible(false);
				}

			else{
				
				MessageBox.error("Invalid Username or Password")
			}


		},

		onShowView4: function(oEvent) {
			this.getView().byId("p5").setVisible(true);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);

		},


		onShowView5: function(oEvent) {

			this.getView().byId("p6").setVisible(true);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);
			this.getView().byId("p5").setVisible(false);
		},


		onShowView6: function(oEvent) {

			this.getView().byId("p7").setVisible(true);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);
			this.getView().byId("p5").setVisible(false);
			this.getView().byId("p6").setVisible(false);

		},	

		onShowView7: function(oEvent) {

			var iDate=thisRef.getView().byId("dp1").getValue()
			var city=thisRef.getView().byId("selCity").getSelectedIndex()
			var thr=thisRef.getView().byId("selThr").getSelectedIndex()
			var type=thisRef.getView().byId("selType").getSelectedIndex()
			var st=thisRef.getView().byId("selSeat").getSelectedIndex()


			if(iDate==''){

				var iDate=thisRef.getView().byId("dp1").getValue()
				thisRef.getView().byId("dp1").setValueState("Error")
				thisRef.getView().byId("dp1").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp1").setTooltip("Please Select Date")


			}else{

				thisRef.getView().byId("dp1").setValueState("None")
				thisRef.getView().byId("dp1").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp1").setTooltip("Please Select Date")

			}

			if(city=='')
			{
				var city=thisRef.getView().byId("selCity").getSelectedIndex()
				thisRef.getView().byId("selCity").setValueState("Error")
				thisRef.getView().byId("selCity").setValueStateText("Please Select City")
				thisRef.getView().byId("selCity").setTooltip("Please Select City")

			}else{

				thisRef.getView().byId("selCity").setValueState("None")
				thisRef.getView().byId("selCity").setValueStateText("Please Select City")
				thisRef.getView().byId("selCity").setTooltip("Please Select City")


			}


			if(thr=='')
			{
				var thr=thisRef.getView().byId("selThr").getSelectedIndex()

				thisRef.getView().byId("selThr").setValueState("Error")
				thisRef.getView().byId("selThr").setValueStateText("Please Select Theatre")
				thisRef.getView().byId("selThr").setTooltip("Please Select Theatre")

			}else{

				thisRef.getView().byId("selThr").setValueState("None")
		        thisRef.getView().byId("selThr").setValueStateText("Please Select Theatre")
		        thisRef.getView().byId("selThr").setTooltip("Please Select Theatre")
			}
			

			if(type=='')
			{
				var type=thisRef.getView().byId("selType").getSelectedIndex()
				thisRef.getView().byId("selType").setValueState("Error")
				thisRef.getView().byId("selType").setValueStateText("Please Select Seat Type")
				thisRef.getView().byId("selType").setTooltip("Please Select seat type")

			}else{

				thisRef.getView().byId("selType").setValueState("None")
				thisRef.getView().byId("selType").setValueStateText("Please Select Seat Type")
				thisRef.getView().byId("selType").setTooltip("Please Select Seat Type")
			}

			if(st=='')
			{

				thisRef.getView().byId("selSeat").setValueState("Error")
				thisRef.getView().byId("selSeat").setValueStateText("Please Select Seat")
				thisRef.getView().byId("selSeat").setTooltip("Please Select Seat")

			}else{

				thisRef.getView().byId("selSeat").setValueState("None")
				thisRef.getView().byId("selSeat").setValueStateText("Please Select Seat")
				thisRef.getView().byId("selSeat").setTooltip("Please Select Seat")
			}

			thisRef.fnvalidateStep()

		},
		onShowView8: function(oEvent) {

			this.getView().byId("CreditCardStep").setVisible(true);
			this.getView().byId("p8").setVisible(false);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);
			this.getView().byId("p5").setVisible(false);
			this.getView().byId("p6").setVisible(false);
			this.getView().byId("p7").setVisible(false);

		},

		onShowView9: function(oEvent) {
			
			this.getView().byId("NetB").setVisible(true);
			this.getView().byId("CreditCardStep").setVisible(false);
			this.getView().byId("p8").setVisible(false);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);
			this.getView().byId("p5").setVisible(false);
			this.getView().byId("p6").setVisible(false);
			this.getView().byId("p7").setVisible(false);

		},
		onShowView10:function(oEvent) {
			
			this.getView().byId("p9").setVisible(true);


		},


		fnvalidate:function(){


			//var alphaExp = /^[a-zA-Z]+$/;
			//var lname=thisRef.getView().byId("iLName").getValue()
			var email=thisRef.getView().byId("EId").getValue()
			var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
			var pwd=thisRef.getView().byId("ipwd").getValue()
			var cpwd=thisRef.getView().byId("icpwd").getValue()
			var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			var no = thisRef.getView().byId("phno").getValue()




			if(!email.match(mailregex)){
				thisRef.getView().byId("EId").setValueState("Error")
				thisRef.getView().byId("EId").setValueStateText("Please enter Email Id")
				thisRef.getView().byId("EId").setTooltip("Please enter Email Id")

			}else{
				thisRef.getView().byId("EId").setValueState("None")
				thisRef.getView().byId("EId").setValueStateText("Please enter Email Id")
				thisRef.getView().byId("EId").setTooltip("Please enter Email Id")
			}

			if(!pwd.match(regex)){
				thisRef.getView().byId("ipwd").setValueState("Error")
				thisRef.getView().byId("ipwd").setValueStateText("Please enter password")
				thisRef.getView().byId("ipwd").setTooltip("Please enter Password")

			}else{
				thisRef.getView().byId("ipwd").setValueState("None")
				thisRef.getView().byId("ipwd").setValueStateText("Please enter password")
				thisRef.getView().byId("ipwd").setTooltip("Please enter Password")

			}



			if(cpwd != pwd){
				thisRef.getView().byId("icpwd").setValueState("Error")
				thisRef.getView().byId("icpwd").setValueStateText("Please enter password")
				thisRef.getView().byId("icpwd").setTooltip("Please enter Password")

			}else{
				thisRef.getView().byId("icpwd").setValueState("None")
				thisRef.getView().byId("icpwd").setValueStateText("Please enter password")
				thisRef.getView().byId("icpwd").setTooltip("Please enter Password")

				/*this.getView().byId("p1").setVisible(false);
				this.getView().byId("p2").setVisible(true);*/
			}


			thisRef.fnvalidateStep2()

		},

		EmailFun:function(){

			var email=thisRef.getView().byId("EId").getValue()
			var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

			if(!email.match(mailregex)){
				thisRef.getView().byId("EId").setValueState("Error")
				thisRef.getView().byId("EId").setValueStateText("Please Enter Valid Email Id")
				thisRef.getView().byId("EId").setTooltip("Please Enter Email Id")

			}else{
				thisRef.getView().byId("EId").setValueState("None")
				thisRef.getView().byId("EId").setValueStateText("Please Enter Valid Email Id")
				thisRef.getView().byId("EId").setTooltip("Please Enter Email Id")
			}


		},

		PwdFun:function(){

			var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			var pwd=thisRef.getView().byId("ipwd").getValue()

			if(!pwd.match(regex))
			{
				thisRef.getView().byId("ipwd").setValueState("Error")
				thisRef.getView().byId("ipwd").setValueStateText("Please enter password")
				thisRef.getView().byId("ipwd").setTooltip("Password must contain (a-z,A-Z,0-9,!@#$%^&)")

			}else{

				thisRef.getView().byId("ipwd").setValueState("None")
				thisRef.getView().byId("ipwd").setValueStateText("Please enter password")
				thisRef.getView().byId("ipwd").setTooltip("Password must contain (a-z,A-Z,0-9,!@#$%^&)")

			}

		},

		CpwdFun:function(){

			var pwd=thisRef.getView().byId("ipwd").getValue()
			var cpwd=thisRef.getView().byId("icpwd").getValue()

			if(cpwd != pwd){
				thisRef.getView().byId("icpwd").setValueState("Error")
				thisRef.getView().byId("icpwd").setValueStateText("Enter correct password")
				thisRef.getView().byId("icpwd").setTooltip("Enter correct password")

			}else{
				thisRef.getView().byId("icpwd").setValueState("None")
				thisRef.getView().byId("icpwd").setValueStateText("Enter correct password")
				thisRef.getView().byId("icpwd").setTooltip("Enter correct password")
			}

		},


		fnDate:function()
		{

			if(iDate==''){
				var iDate=thisRef.getView().byId("dp1").getValue()
				thisRef.getView().byId("dp1").setValueState("Error")
				thisRef.getView().byId("dp1").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp1").setTooltip("Please Select Date")

			}else{
				thisRef.getView().byId("dp1").setValueState("None")
				thisRef.getView().byId("dp1").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp1").setTooltip("Please Select Date")

			}

		},

		fnCity:function()
		{

			if(city=='')
			{
				var city=thisRef.getView().byId("selCity").getSelectedIndex()
				thisRef.getView().byId("selCity").setValueState("Error")
				thisRef.getView().byId("selCity").setValueStateText("Please Select City")
				thisRef.getView().byId("selCity").setTooltip("Please Select City")

			}else{
				thisRef.getView().byId("selCity").setValueState("None")
				thisRef.getView().byId("selCity").setValueStateText("Please Select City")
				thisRef.getView().byId("selCity").setTooltip("Please Select City")


			}

		},


		ThrSelect : function(oEvent) {

			var thr = thisRef.byId("selThr");
			var oTemplate = new sap.ui.core.ListItem({ key : "{theatre}", text : "{theatre}"})
			thr.bindItems(oEvent.getParameter("selectedItem").getBindingContext().getPath() + "/Theatres", oTemplate);

			if(city=='')
			{
				var city=thisRef.getView().byId("selCity").getSelectedIndex()
				thisRef.getView().byId("selCity").setValueState("Error")
				thisRef.getView().byId("selCity").setValueStateText("Please Select City")
				thisRef.getView().byId("selCity").setTooltip("Please Select City")

			}else{
				thisRef.getView().byId("selCity").setValueState("None")
				thisRef.getView().byId("selCity").setValueStateText("Please Select City")
				thisRef.getView().byId("selCity").setTooltip("Please Select City")


			}

		},


		TypeSelect:function(oEvent){
			var type = this.byId("selType");

			var oTemplate = new sap.ui.core.ListItem({ key : "{type}", text : "{type}"})
			type.bindItems(oEvent.getParameter("selectedItem").getBindingContext().getPath() + "/Type", oTemplate);

			if(thr=='')
			{
				var thr=thisRef.getView().byId("selThr").getSelectedIndex()
				thisRef.getView().byId("selThr").setValueState("Error")
				thisRef.getView().byId("selThr").setValueStateText("Please Select theatre")
				thisRef.getView().byId("selThr").setTooltip("Please Select theatre")

			}else{
				thisRef.getView().byId("selThr").setValueState("None")
				thisRef.getView().byId("selThr").setValueStateText("Please Select theatre")
				thisRef.getView().byId("selThr").setTooltip("Please Select theatre")



			}
		},


		PrzSelect : function(oEvent) {
			var oPrz = this.byId("selPrize");

			var oTemplate = new sap.ui.core.ListItem({ key : "{name}", text : "{name}"})
			oPrz.bindItems(oEvent.getParameter("selectedItem").getBindingContext().getPath() + "/price", oTemplate);

			if(type=='')
			{
				var type=thisRef.getView().byId("selType").getSelectedIndex()
				thisRef.getView().byId("selType").setValueState("Error")
				thisRef.getView().byId("selType").setValueStateText("Please Select Seat Type")
				thisRef.getView().byId("selType").setTooltip("Please Select seat type")

			}else{
				thisRef.getView().byId("selType").setValueState("None")
				thisRef.getView().byId("selType").setValueStateText("Please Select Seat Type")
				thisRef.getView().byId("selType").setTooltip("Please Select seat type")



			}

		},	

		fnSeat:function(){


			if(st=='')
			{
				var st=thisRef.getView().byId("selSeat").getSelectedIndex()
				thisRef.getView().byId("selSeat").setValueState("Error")
				thisRef.getView().byId("selSeat").setValueStateText("Please Select Seat")
				thisRef.getView().byId("selSeat").setTooltip("Please Select Seat")

			}else{
				thisRef.getView().byId("selSeat").setValueState("None")
				thisRef.getView().byId("selSeat").setValueStateText("Please Select Seat")
				thisRef.getView().byId("selSeat").setTooltip("Please Select Seat")


			}

		},



		fnCreditCard:function(){
			var rbv=thisRef.getView().byId("rb1").getSelected()
			var rbm=thisRef.getView().byId("rb2").getSelected()

			if(rbv==false && rbm==false){
				thisRef.getView().byId("rb1").setValueState("Error")

				thisRef.getView().byId("rb1").setTooltip("Please select type")

				thisRef.getView().byId("rb2").setValueState("Error")


				thisRef.getView().byId("rb2").setTooltip("Please select type")
			}
			else{
				thisRef.getView().byId("rb1").setValueState("None")
				//thisRef.getView().byId("rb1").setValueStateText("Please select gender")

				thisRef.getView().byId("rb1").setTooltip("Please select type")

				thisRef.getView().byId("rb2").setValueState("None")
				//thisRef.getView().byId("rb2").setValueStateText("Please select gender")
				thisRef.getView().byId("rb2").setTooltip("Please select type")


			}
			//thisRef.fnvalidateStep2()

		},



		onBack: function(){


			this.getView().byId("p1").setVisible(true);

		},

		navBack: function(){


			this.getView().byId("p8").setVisible(true);

		},


		OnBtnPress:function(){
			var cname=thisRef.getView().byId("cname").getValue()
			var cnum=thisRef.getView().byId("cno").getValue()
			var sc=thisRef.getView().byId("scode").getValue()
			var exDate=thisRef.getView().byId("dp2").getValue()

			if(cname==''){


				thisRef.getView().byId("cname").setValueState("Error")

				thisRef.getView().byId("cname").setValueStateText("Please Enter Name")
				thisRef.getView().byId("cname").setTooltip("Please Enter Name")

			}else{

				thisRef.getView().byId("cname").setValueState("None")

				thisRef.getView().byId("cname").setValueStateText("Please Enter Name")
				thisRef.getView().byId("cname").setTooltip("Please Enter Name")

			}

			if(cnum=='' || sc==''){


				MessageBox.error("Please enter Credit Card or Security No");

			}
				
				
			



			if(exDate==''){

				thisRef.getView().byId("dp2").setValueState("Error")
				thisRef.getView().byId("dp2").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp2").setTooltip("Please Select Date")

			}else{
				thisRef.getView().byId("dp2").setValueState("None")
				thisRef.getView().byId("dp2").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp2").setTooltip("Please Select Date")

			}
			thisRef.fnvalidateStep2()
            
			

		},



		CName :function(){

			var cname=thisRef.getView().byId("cname").getValue()
			var alphaExp = /^[a-zA-Z a-zA-z]+$/;

			if(!cname.match(alphaExp)){

				MessageBox.error("Please enter only alphabets");
				thisRef.getView().byId("cname").setValueState("Error")

				thisRef.getView().byId("cname").setValueStateText("Please Enter Name")
				thisRef.getView().byId("cname").setTooltip("Please Enter Name")

			}else{

				thisRef.getView().byId("cname").setValueState("None")

				thisRef.getView().byId("cname").setValueStateText("Please Enter Name")
				thisRef.getView().byId("cname").setTooltip("Please Enter Name")

			}


		},



		exDate:function()
		{

			if(exDate==''){
				var exDate=thisRef.getView().byId("dp2").getValue()
				thisRef.getView().byId("dp2").setValueState("Error")
				thisRef.getView().byId("dp2").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp2").setTooltip("Please Select Date")

			}else{
				thisRef.getView().byId("dp2").setValueState("None")
				thisRef.getView().byId("dp2").setValueStateText("Please Select Date")
				thisRef.getView().byId("dp2").setTooltip("Please Select Date")

			}

		},










		fnvalidateStep2:function(){

			var ErrCount=0;
			//var cname=thisRef.getView().byId("cname").getValue()
			//var cnum=thisRef.getView().byId("cno").getValue()
			//var sc=thisRef.getView().byId("scode").getValue()
			//var exDate=thisRef.getView().byId("dp2").getValue()

			var email=thisRef.getView().byId("EId").getValue()
			var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
			var pwd=thisRef.getView().byId("ipwd").getValue()
			var cpwd=thisRef.getView().byId("icpwd").getValue()
			var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
			var no = this.getView().byId("phno").getValue();



			/*	if(cname=='')
			{
				ErrCount++
			}


			if(exDate=='')
			{
				ErrCount++
			}*/

			if(!email.match(mailregex))
			{
				ErrCount++
			}
			if(!pwd.match(regex))
			{
				ErrCount++
			}
			if(cpwd != pwd)
			{
				ErrCount++
			}
			if(isNaN(no))
			{
				ErrCount++
			}



			if(ErrCount==0)
			{
				this.getView().byId("p9").setVisible(false);
				this.getView().byId("p8").setVisible(false);
				this.getView().byId("CreditCardStep").setVisible(false);
				this.getView().byId("NetB").setVisible(false);
				this.getView().byId("p7").setVisible(false);
				this.getView().byId("p1").setVisible(false);
				this.getView().byId("p2").setVisible(true);
				this.getView().byId("p3").setVisible(false);
				this.getView().byId("p4").setVisible(false);
				this.getView().byId("p5").setVisible(false);
				this.getView().byId("p6").setVisible(false);
			}

		},



		fnvalidateStep:function(){

			var ErrCount=0;

			var iDate=thisRef.getView().byId("dp1").getValue()
			var city=thisRef.getView().byId("selCity").getSelectedIndex()
			var thr=thisRef.getView().byId("selThr").getSelectedIndex()
			var type=thisRef.getView().byId("selType").getSelectedIndex()
			var st=thisRef.getView().byId("selSeat").getSelectedIndex()




			if(iDate=='')
			{
				ErrCount++
			}

			if(city=='')
			{
				ErrCount++
			}
			if(thr=='')
			{
				ErrCount++
			}

			if(type=='')
			{
				ErrCount++
			}
			if(st=='')
			{
				ErrCount++
			}

			if(ErrCount==0)
			{

				this.getView().byId("p7").setVisible(false);
				this.getView().byId("p8").setVisible(true);
				this.getView().byId("CreditCardStep").setVisible(false);
				this.getView().byId("NetB").setVisible(false);
				this.getView().byId("p1").setVisible(false);
				this.getView().byId("p2").setVisible(false);
				this.getView().byId("p3").setVisible(false);
				this.getView().byId("p4").setVisible(false);
				this.getView().byId("p5").setVisible(false);
				this.getView().byId("p6").setVisible(false);
				this.getView().byId("p9").setVisible(false);

			}

		},

		display:function(){
			
			
			//var uname=thisRef.getView().byId("Uname").getValue()
			this.getView().byId("p7").setVisible(true);
			this.getView().byId("p8").setVisible(false);
			this.getView().byId("CreditCardStep").setVisible(false);
			this.getView().byId("NetB").setVisible(false);
			this.getView().byId("p1").setVisible(false);
			this.getView().byId("p2").setVisible(false);
			this.getView().byId("p3").setVisible(false);
			this.getView().byId("p4").setVisible(false);
			this.getView().byId("p5").setVisible(false);
			this.getView().byId("p6").setVisible(false);
			this.getView().byId("p9").setVisible(false);
			
			var uname=thisRef.getView().byId("Uname").getValue()
			thisRef.getView().byId("date").setText(+uname)

			
		},



	});
});