using AmplyfiApp.Contracts.Models;
using AmplyfiApp.Contracts.ViewModels;
using AmplyfiApp.Common.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AmplyfiApp.Common.ViewModels
{
    public class SampleDataViewModel : ISampleDataViewModel
    {
        public SampleDataViewModel()
        {
            SampleDataCountries = LoadCountries();
            SampleData = LoadSampleData();
        }

        public List<ISampleDataClass> SampleData { get; set; }

        public List<string> SampleDataTitles { get; set; }

        public List<ICountry> SampleDataCountries { get; set; }

        public List<ISampleDataClass> LoadSampleData()
        {
            List<ISampleDataClass> temp = new List<ISampleDataClass>();
            foreach (string file in Directory.EnumerateFiles(Path.Combine(Environment.CurrentDirectory, "Assets/Data")))
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
                    Countries = GetFilteredCountries(jObject["m_Places"].Children().ToList().Select(x => x.ToString()).ToList()),
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

        public List<ICountry> LoadCountries()
        {
            List<ICountry> temp = new List<ICountry>();
            using (StreamReader sr = new StreamReader(Path.Combine(Environment.CurrentDirectory, "Assets/countries.json")))
            {
                JArray jArray = JArray.Parse(sr.ReadToEnd());
                foreach(JObject jObject in jArray)
                {
                    temp.Add(new Country()
                    {
                        Name = jObject["name"].ToString(),
                        Capital = jObject["capital"].ToString() ?? "",
                        Coordinates = new double[] { double.Parse(jObject["latlng"][1].ToString()), double.Parse(jObject["latlng"][0].ToString()) }
                });
                }
            }
            return temp;
        }

        public List<ICountry> GetFilteredCountries(List<string> places)
        {
            List<ICountry> temp = new List<ICountry>();
            foreach (string place in places)
            {
                foreach(ICountry country in SampleDataCountries)
                {
                    if (country.Name.Equals(place) || country.Capital.Equals(place)) temp.Add(country);
                }
            }
            return temp;
        }
    }
}
