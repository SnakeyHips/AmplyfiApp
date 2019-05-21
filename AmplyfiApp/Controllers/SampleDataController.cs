using System.Collections.Generic;
using System.Linq;
using AmplyfiApp.Contracts.Models;
using AmplyfiApp.Contracts.ViewModels;
using AmplyfiApp.Common.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AmplyfiApp.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private ISampleDataViewModel sampleDataViewModel { get; set; }

        public SampleDataController()
        {
            this.sampleDataViewModel = new SampleDataViewModel();
        }

        [HttpGet("[action]")]
        public ISampleDataClass GetSampleDataItem(int id)
        {
            return this.sampleDataViewModel.SampleData.FirstOrDefault(x => x.ID == id);
        }

        [HttpGet("[action]")]
        public IEnumerable<int> GetSampleDataIds()
        {
            return this.sampleDataViewModel.SampleData.OrderBy(x => x.ID).Select(x => x.ID).ToList();
        }
    }
}
