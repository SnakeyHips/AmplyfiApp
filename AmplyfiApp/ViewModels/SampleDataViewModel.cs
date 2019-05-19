using AmplyfiApp.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

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
            List<SampleDataClass> temp = new List<SampleDataClass>();
            foreach (string file in Directory.EnumerateFiles(Path.Combine(Environment.CurrentDirectory, "Assets")))
            {
                JObject jObject = JObject.Parse(File.ReadAllText(file));
                temp.Add(new SampleDataClass()
                {
                    ID = int.Parse(jObject["m_szDocID"].ToString()),
                    Title = jObject["m_szDocTitle"].ToString(),
                    Year = int.Parse(jObject["m_szYear"].ToString()),
                    Summary = jObject["m_szDocSumamry"].ToString(),
                    Body = jObject["m_szDocBody"].ToString(),
                    Geo1 = jObject["m_szGeo1"].ToString(),
                    SourceType = jObject["m_szSourceType"].ToString(),
                    SrcUrl = jObject["m_szSrcUrl"].ToString(),
                    Places = jObject["m_Places"].Children().ToList().Select(x => x.ToString()).ToList(),
                    People = jObject["m_People"].Children().ToList().Select(x => x.ToString()).ToList(),
                    Companies = jObject["m_Companies"].Children().ToList().Select(x => x.ToString()).ToList(),
                    BiGrams = jObject["m_BiGrams"].Children().ToList().Select(x => x.ToString()).ToList(),
                    TriGrams = jObject["m_TriGrams"].Children().ToList().Select(x => x.ToString()).ToList(),
                    SocialTags = jObject["m_SocialTags"].Children().ToList().Select(x => x.ToString()).ToList(),
                    Topics = jObject["m_Topics"].Children().ToList().Select(x => x.ToString()).ToList(),
                    Industry = jObject["m_Industry"].Children().ToList().Select(x => x.ToString()).ToList(),
                    Technology = jObject["m_Technology"].Children().ToList().Select(x => x.ToString()).ToList(),
                    BiCnt = jObject["m_BiCnt"].Children().ToList().Select(x => int.Parse(x.ToString())).ToList(),
                    TriCnt = jObject["m_TriCnt"].Children().ToList().Select(x => int.Parse(x.ToString())).ToList(),
                    BodyWordCnt = int.Parse(jObject["m_iDocBodyWordCnt"].ToString()),
                });
            }
            return temp;
        }
    }
}
