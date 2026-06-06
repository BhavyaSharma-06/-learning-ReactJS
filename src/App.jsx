import User from './components/User'

function App() {

  const jobs = [
  {
    company: "Google",
    role: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$4500/month",
    location: "Bangalore",
    posted: "5 days ago",
    logo: "https://tse3.mm.bing.net/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  },
  {
    company: "Meta",
    role: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$7000/month",
    location: "Mumbai",
    posted: "2 days ago",
    logo: "https://tse1.mm.bing.net/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  },
  {
    company: "Amazon",
    role: "FullStack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    stipend: "$3000/month",
    location: "Hyderabad",
    posted: "7 days ago",
    logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    applyButton: "Apply Now"
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$6500/month",
    location: "Pune",
    posted: "1 day ago",
    logo: "https://static.vecteezy.com/system/resources/previews/022/100/812/non_2x/microsoft-logo-transparent-free-png.png",
    applyButton: "Apply Now"
  },
  {
    company: "Netflix",
    role: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    stipend: "$2800/month",
    location: "Delhi",
    posted: "4 days ago",
    logo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  },
  {
    company: "Apple",
    role: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$7500/month",
    location: "Bangalore",
    posted: "3 days ago",
    logo: "https://tse1.mm.bing.net/th/id/OIP.plTjsGKtFmoWUm8tuzFcOwHaJG?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  },
  {
    company: "Adobe",
    role: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$4000/month",
    location: "Noida",
    posted: "6 days ago",
    logo: "https://tse4.mm.bing.net/th/id/OIP.A0Nr5ZO2-yxptjeRpEsDUgHaFj?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  },
  {
    company: "Uber",
    role: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    stipend: "$5500/month",
    location: "Chennai",
    posted: "8 days ago",
    logo: "https://cdn.branch.io/branch-assets/1586032766114-og_image.png",
    applyButton: "Apply Now"
  },
  {
    company: "LinkedIn",
    role: "Data Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$4800/month",
    location: "Gurgaon",
    posted: "2 days ago",
    logo: "https://tse3.mm.bing.net/th/id/OIP.hTbyWB8sOPjeiLuy1nP1AAHaHa?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  },
  {
    company: "Salesforce",
    role: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$6800/month",
    location: "Mumbai",
    posted: "5 days ago",
    logo: "https://tse4.mm.bing.net/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?pid=Api&P=0&h=180",
    applyButton: "Apply Now"
  }
];
  return (
    <div className="parent">
      {jobs.map(function(elem, idx){
          return <div key={idx}>
            <User company = {elem.company} role={elem.role} tag1= {elem.tag1} tag2 = {elem.tag2}
            stipend = {elem.stipend} location={elem.location} posted={elem.posted} logo={elem.logo} applyButton = {elem.applyButton} />
          </div>
      })}
    </div>
  )
}

export default App