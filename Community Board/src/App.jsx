import './App.css';
import Post from '../components/Post';

const App = () => {

  return (
    <div className="App">
      <div className="Header">
        <img src="src/assets/banner.png" alt="banner" className="BannerImg"/>
        <h1 className="BannerTitle">Welcome to Music City</h1>
    </div>
    <div className="container">
      <Post image= "https://www.nowplayingnashville.com/wp-content/uploads/sites/www.nowplayingnashville.com/images/2022/08/Screen-Shot-2022-08-15-at-9.02.28-PM-e1660615390820.png" 
      eventName="Jesus In A Bar" eventDate="Feb 27, 2023" eventTime="7:30 PM" 
      eventLocation="City Winery" link="https://www.bigstub.com/Kodo-Tickets/Nashville-TN/event-5243075-February-27th-2023-Schermerhorn-Symphony-Center"/>

      <Post image= "https://photos.bandsintown.com/thumb/12030747.jpeg" eventName="The Dryes" eventDate="Feb 28, 2023" eventTime="7:00 PM" 
      eventLocation="The Basement East" link="https://www.bigstub.com/The-Dryes-Tickets/event-5542435-February-28th-2023-The-Basement-East"/>

      <Post image= "https://townsquare.media/site/204/files/2022/05/attachment-Jimmie-Allen-Jennifer-Lopez-On-My-Way.jpg" eventName="Carrie Underwood & Jimmie Allen" 
      eventDate="Mar 1, 2023" eventTime="7:30 PM" eventLocation="Bridgestone Arena" link="https://www.bigstub.com/Carrie-Underwood-Tickets/Nashville-TN/event-5150984-March-1st-2023-Bridgestone-Arena"/>

      <Post image= "https://www.umgnashville.com/wp-content/uploads/2022/07/DierksBentley22-e1659106437727.jpeg" eventName="Dierks Bentley" eventDate="Mar 3, 2023" eventTime="7:00 PM" 
      eventLocation="Grand Ole Opry House" link="https://www.bigstub.com/Dierks-Bentley-Tickets/Nashville-TN/event-5363161-March-3rd-2023-Grand-Ole-Opry-House"/>

      <Post image= "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRMKrJvFLlQgBYP3byYPjDy2NZp5VztPy8JP-l_KrBO82uKLngBG2xmXafFN37kgGL5Oee4wtAD0K9DmiU" eventName="Stephen Marley" eventDate="Mar 7, 2023" eventTime="7:30 PM" 
      eventLocation="City Winery" link="https://www.bigstub.com/Stephen-Marley-Tickets/Nashville-TN/event-5473405-March-7th-2023-City-Winery"/>

      <Post image= "https://www.carparkrecords.com/wp-content/uploads/2022/06/0601_TheBeths_0065-1200x800.jpg" eventName="The Beths" eventDate="Mar 8, 2023" eventTime="8:00 PM" 
      eventLocation="Brooklyn Bowl" link="https://www.bigstub.com/The-Beths-Tickets/Nashville-TN/event-5271826-March-8th-2023-Brooklyn-Bowl"/>

      <Post image= "" eventName="" eventDate="" eventTime="" 
      eventLocation="" link=""/>

      <Post image= "" eventName="" eventDate="" eventTime="" 
      eventLocation="" link=""/>

      <Post image= "" eventName="" eventDate="" eventTime="" 
      eventLocation="" link=""/>

      <Post image= "" eventName="" eventDate="" eventTime="" 
      eventLocation="" link=""/>

      <Post image= "" eventName="" eventDate="" eventTime="" 
      eventLocation="" link=""/>

      <Post image= "" eventName="" eventDate="" eventTime="" 
      eventLocation="" link=""/>
    </div>
      
      
    </div>
  )
}

export default App
