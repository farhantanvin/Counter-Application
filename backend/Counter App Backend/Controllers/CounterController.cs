using Counter_App_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Counter_App_Backend.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class CounterController : ControllerBase
    {
       // Get API for retrive data from file
        [HttpGet]
        public IEnumerable<string> Get() {

            string path = System.IO.Directory.GetCurrentDirectory();
            string readText = System.IO.File.ReadAllText(path+"/CounterData.txt");
            yield return readText;
        }


        // POST API for write in the File
        [HttpPost]
        public void Post([FromBody] Counter counter)
        {
            
            string path = System.IO.Directory.GetCurrentDirectory();
            string json = JsonConvert.SerializeObject(counter);
            

            if (System.IO.File.Exists(path+ "/CounterData.txt"))
            {
                System.IO.File.AppendAllText(path +"/CounterData.txt",","+json);
            }
            else
            {
                System.IO.File.WriteAllText(path+"/CounterData.txt",json, Encoding.UTF8);
            }

        }

        // Api for Know File Size
        [HttpGet("/api/FileSize")]
        public IEnumerable<long> GetFileSize()
        {
            string path = System.IO.Directory.GetCurrentDirectory();
            long length = new System.IO.FileInfo(path + "/CounterData.txt").Length;
            yield return length;
        }

       

    }
}
