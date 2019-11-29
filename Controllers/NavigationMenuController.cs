using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularExample.Controllers
{
    [Route("api/[controller]")]
    public class NavigationMenuController : Controller
    {
        [HttpGet("[action]")]
        public List<NavigationItem> GetNavigationItems()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using (StreamReader r = new StreamReader("./Controllers/StaticMenuData.json", Encoding.GetEncoding(1254)))
            {
                string json = r.ReadToEnd();
                List<NavigationItem> items = JsonConvert.DeserializeObject<List<NavigationItem>>(json);
                return items;
            }
        }

        public class NavigationItem
        {
            public string Title { get; set; }
            public NavigationItem[] Children { get; set; }
            public bool ShowChildren{ get; set; }
            public string Page { get; set; }
        }
    }
}
