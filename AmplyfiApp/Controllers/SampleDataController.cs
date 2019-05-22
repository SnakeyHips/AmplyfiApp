using System.Collections.Generic;
using System.Linq;
using System.Net;
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
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public ActionResult<ISampleDataClass> GetSampleDataItem(int id)
        {
            return new JsonResult(this.sampleDataViewModel.SampleData.FirstOrDefault(x => x.ID == id));
        }

        [HttpGet("[action]")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public ActionResult<IEnumerable<int>> GetSampleDataIds()
        {
            return new JsonResult(this.sampleDataViewModel.SampleData.OrderBy(x => x.ID).Select(x => x.ID).ToList());
        }
    }
}
