using System.Collections.Generic;

namespace AmplyfiApp.Models
{
    public class SampleDataClass
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Summary { get; set; }
        public string Body { get; set; }
        public string Geo1 { get; set; }
        public string SourceType { get; set; }
        public string SrcUrl { get; set; }
        public List<string> Places { get; set; }
        public List<string> People { get; set; }
        public List<string> Companies { get; set; }
        public List<string> BiGrams { get; set; }
        public List<string> TriGrams { get; set; }
        public List<string> SocialTags { get; set; }
        public List<string> Topics { get; set; }
        public List<string> Industry { get; set; }
        public List<string> Technology { get; set; }
        public List<int> BiCnt { get; set; }
        public List<int> TriCnt { get; set; }
        public int BodyWordCnt { get; set; }
    }
}
