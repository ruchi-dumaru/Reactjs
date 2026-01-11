import Card from "./component/card";
const App = () => {
  const jobs = [
    {
      img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
      company: "Microsoft",
      time: "3 hours ago",
      title: "Senior backend developer",
      type: "Part-Time",
      level: "Senior Level",
      pay: "$120/hr",
      location: "Kathmandu, Nepal",
    },
    {
      img: "https://s3-alpha.figma.com/hub/file/6055265191/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png",
      company: "Google",
      time: "1 day ago",
      title: "Frontend Engineer",
      type: "Full-Time",
      level: "Mid Level",
      pay: "$100/hr",
      location: "Lalitpur, Nepal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      company: "Amazon",
      time: "5 hours ago",
      title: "Cloud Architect",
      type: "Contract",
      level: "Senior Level",
      pay: "$150/hr",
      location: "Pokhara, Nepal",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      company: "Meta",
      time: "2 days ago",
      title: "UI/UX Designer",
      type: "Part-Time",
      level: "Junior Level",
      pay: "$80/hr",
      location: "Biratnagar, Nepal",
    },
    {
      img: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      company: "Netflix",
      time: "6 hours ago",
      title: "DevOps Engineer",
      type: "Full-Time",
      level: "Senior Level",
      pay: "$130/hr",
      location: "Butwal, Nepal",
    },
    {
      img: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
      company: "Tesla",
      time: "12 hours ago",
      title: "Mobile App Developer",
      type: "Internship",
      level: "Entry Level",
      pay: "$60/hr",
      location: "Dharan, Nepal",
    },
    {
      img: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      company: "Adobe",
      time: "4 hours ago",
      title: "Graphics Engineer",
      type: "Contract",
      level: "Mid Level",
      pay: "$110/hr",
      location: "Janakpur, Nepal",
    },
    {
      img: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
      company: "Intel",
      time: "1 hour ago",
      title: "AI Researcher",
      type: "Full-Time",
      level: "Senior Level",
      pay: "$140/hr",
      location: "Chitwan, Nepal",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (val, index) {
        return <Card key={index} {...val} />;
      })}
    </div>
  );
};

export default App;
