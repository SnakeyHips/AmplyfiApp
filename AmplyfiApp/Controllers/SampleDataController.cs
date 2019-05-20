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
        public SampleDataClass GetSampleData(int id)
        {
            return SampleDataViewModel.SampleData.FirstOrDefault(x => x.ID == id);
        }

        [HttpGet("[action]")]
        public IEnumerable<int> GetSampleDataIds()
        {
            return SampleDataViewModel.SampleData.OrderBy(x => x.ID).Select(x => x.ID).ToList();
        }
    }
}
