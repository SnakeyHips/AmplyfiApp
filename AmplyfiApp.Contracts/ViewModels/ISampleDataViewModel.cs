using AmplyfiApp.Contracts.Models;
using System.Collections.Generic;

namespace AmplyfiApp.Contracts.ViewModels
{
    public interface ISampleDataViewModel
    {
        List<ISampleDataClass> SampleData { get; }

        List<string> SampleDataTitles { get; }

        List<ISampleDataClass> LoadSampleData();
    }
}
