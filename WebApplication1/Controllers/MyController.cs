using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public string searchLogradouro(string cep)
        {
            WebClient client = new WebClient();
            string reply = client.DownloadString("https://viacep.com.br/ws/" + cep + "/json/");

            return reply;
        }
    }
}
