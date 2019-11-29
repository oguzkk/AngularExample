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
    public class DefaultController : Controller
    {
        [HttpGet("[action]")]
        public List<NavigationItem> GetNavigationItems()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using (StreamReader r = new StreamReader("./Controllers/StaticData/StaticMenuData.json", Encoding.GetEncoding(1254)))
            {
                string json = r.ReadToEnd();
                List<NavigationItem> items = JsonConvert.DeserializeObject<List<NavigationItem>>(json);
                return items;
            }
        }

        [HttpGet("[action]")]
        public List<ResponseItem> GetAccounts()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using (StreamReader r = new StreamReader("./Controllers/StaticData/StaticData.json", Encoding.GetEncoding(1254)))
            {
                string json = r.ReadToEnd();
                StaticDataBag items = JsonConvert.DeserializeObject<StaticDataBag>(json);
                return items.Accounts;
            }
        }

        [HttpGet("[action]")]
        public List<ResponseItem> GetRetailCustomers()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using (StreamReader r = new StreamReader("./Controllers/StaticData/StaticData.json", Encoding.GetEncoding(1254)))
            {
                string json = r.ReadToEnd();
                StaticDataBag items = JsonConvert.DeserializeObject<StaticDataBag>(json);
                return items.RetailCustomers;
            }
        }

        [HttpGet("[action]")]
        public List<ResponseItem> GetCorporateCustomers()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using (StreamReader r = new StreamReader("./Controllers/StaticData/StaticData.json", Encoding.GetEncoding(1254)))
            {
                string json = r.ReadToEnd();
                StaticDataBag items = JsonConvert.DeserializeObject<StaticDataBag>(json);
                return items.CorporateCustomers;
            }
        }

        public class NavigationItem
        {
            public string Title { get; set; }
            public NavigationItem[] Children { get; set; }
            public bool ShowChildren{ get; set; }
            public string Page { get; set; }
            public string Transaction { get; set; }
        }

        public class ResponseItem
        {
            public string Name { get; set; }
            public string Type { get; set; }
        }

        public class StaticDataBag
        {
            public List<ResponseItem> CorporateCustomers { get; set; }
            public List<ResponseItem> RetailCustomers { get; set; }
            public List<ResponseItem> Accounts{ get; set; }
        }
    }
}
