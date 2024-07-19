## Technical Assessment - HCI
**How to Start?**

* Clone the repo
* Install all the dependencies for the Client (_yarn_ or _npm install_)
* Start the ASP.NET Core server from Visual Studio or using _dotnet run_.
* Start the React development server: using _npm start_ or _yarn start_ from the ClientApp (Client/ClientApp) directory
* Open _https://localhost:44424_ and follow the on screen instructions to look for patients/visits

**Environments**
* API: _http://localhost:5272_
* Client: _https://localhost:44424_

**Extra Info**
* You can review and make some tests on the EPs implemented using Swagger (_http://localhost:5272/swagger/index.html_)
* React Client only needs 3 main libraries to run:
  *  _Reactstrap_ (Bootstrap implemented for UI styles)
  *  _Axios_ (handle the requests to the API)
  *  _React-router-dom_ (linking + navigation)
