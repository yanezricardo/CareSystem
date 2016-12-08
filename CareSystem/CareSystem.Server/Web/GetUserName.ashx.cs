using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.Web {
    /// <summary>
    /// Summary description for GetUserName
    /// </summary>
    public class GetUserName : IHttpHandler {

        public void ProcessRequest(HttpContext context) {
            using (var serverContext = ServerApplicationContext.CreateContext()) {
                context.Response.ContentType = "text/plain";
                context.Response.Write(serverContext.Application.User.Name);
            }
        }

        public bool IsReusable {
            get {
                return false;
            }
        }
    }
}