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

        <Post image= "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ1BVLKkuvNcQSwhjdOncIvOilNyzvmzOqzsOVHaMIkt9qAAiYDiBnA4CSXwLij1Vsl-sDPF9dzBTMB2jc" eventName="Margo Price" eventDate="Mar 9, 2023" eventTime="8:00 PM" 
        eventLocation="Ryman Auditorium" link="https://www.bigstub.com/Margo-Price-Tickets/Nashville-TN/event-5332331-March-9th-2023-Ryman-Auditorium"/>

        <Post image= "https://nul.org/sites/default/files/inline-images/Elle_Varner_500.png" eventName="Elle Varner" eventDate="Mar 11, 2023" eventTime="8:00 PM" 
        eventLocation="City Winery" link="https://www.bigstub.com/Elle-Varner-Tickets/Nashville-TN/event-5473377-March-11th-2023-City-Winery"/>

        <Post image= "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSkwbobDlR1zLFih_lU4aw2yIcXLXCKxwkMWAN5g7UbYhSLjS4uNsnPDC8VQUuZH8z7Cml9MVcSYFWFXGQ" eventName="Regina Spektor" eventDate="Mar 13, 2023" eventTime="7:30 PM" 
        eventLocation="Ryman Auditorium" link="https://www.bigstub.com/Regina-Spektor-Tickets/Nashville-TN/event-5180445-March-13th-2023-Ryman-Auditorium"/>

        <Post image= "https://yt3.googleusercontent.com/k2ni0mMMty2r53rzYp5FKdH_fslgChoHiSlowu5qL3Al0je8bw8qKv1leIcrMa9fSk96YRpH=s900-c-k-c0x00ffffff-no-rj" eventName="Lainey Wilson" eventDate="Mar 15, 2023" eventTime="8:00 PM" 
        eventLocation="Brooklyn Bowl" link="https://www.bigstub.com/Lainey-Wilson-Tickets/Nashville-TN/event-5413842-March-15th-2023-Brooklyn-Bowl"/>

        <Post image= "https://s1.ticketm.net/dam/a/f90/ff07e5c2-4f2e-42eb-9e59-653718fa1f90_SOURCE" eventName="Kountry Wayne" eventDate="Mar 17, 2023" eventTime="7:30 PM" 
        eventLocation="Ryman Auditorium" link="https://www.bigstub.com/Kountry-Wayne-Tickets/Nashville-TN/event-5465603-March-17th-2023-Ryman-Auditorium"/>

        <Post image= "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSq8LA_HYVL9V5Ri0KMZeTXXByeGmfg_5VdXZe86d8ZTurCxhSQpkKYntZUatxDMOsWpBaK_nzT1JERRbM" eventName="King Tuff" eventDate="Mar 17, 2023" eventTime="8:00 PM" 
        eventLocation="The Basement East" link="https://www.bigstub.com/King-Tuff-Tickets/Nashville-TN/event-5395728-March-17th-2023-The-Basement-East"/>
      </div>
    </div>
  )
}

export default App
