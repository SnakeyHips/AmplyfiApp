using AmplyfiApp.Models;
using System.Collections.Generic;

namespace AmplyfiApp.ViewModels
{
    public class SampleDataViewModel
    {
        public SampleDataViewModel()
        {
            SampleData = LoadSampleData();
        }

        public List<SampleDataClass> SampleData { get; set; }

        public List<string> SampleDataTitles { get; set; }

        public List<SampleDataClass> LoadSampleData()
        {
            // Load Data here
            List<SampleDataClass> temp = new List<SampleDataClass>();
            return temp;
        }
    }
}
