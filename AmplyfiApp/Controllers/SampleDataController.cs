using System;
using System.Collections.Generic;
using System.Linq;
using AmplyfiApp.Models;
using AmplyfiApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AmplyfiApp.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private SampleDataViewModel SampleDataViewModel { get; set; }

        public SampleDataController()
        {
            SampleDataViewModel = new SampleDataViewModel();
        }

        [HttpGet("[action]")]
        public SampleDataClass GetSampleData(string title)
        {
            return SampleDataViewModel.SampleData.FirstOrDefault(x => x.Title.Equals(title));
        }

        [HttpGet("[action]")]
        public IEnumerable<string> GetSampleDataTitles()
        {
            return SampleDataViewModel.SampleData.Select(x => x.Title).ToList();
        }
    }
}
