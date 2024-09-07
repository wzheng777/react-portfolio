import React from 'react';

function Experience() {
  return (
    <section>
      <h2>Professional Experience</h2>
      
      <div>
        <h3>Software Engineer - Rx Networks Inc. (January 2020 - April 2024)</h3>
        <p>
          - Developed and tested an Android NTRIP Client library in C++, which led to a partnership with Qualcomm. This development achieved meter-level location accuracy on mobile devices.<br />
          - Participated in developing an NTRIP Caster using Netty's NIO framework, handling up to 10,000 simultaneous connections.<br />
          - Contributed to the development of SSR2OSR and DGNSS servers using Java and Maven to enhance geolocation services.<br />
          - Authored and implemented Kubernetes scripts for auto-scaling and geo-distribution across networks.
        </p>
      </div>

      <div>
        <h3>Senior Software Developer - DDS Wireless International Inc. (January 2019 - 2020)</h3>
        <p>
          - Led the development of a React Native app for paratransit, improving services for mobility-impaired passengers.<br />
          - Developed a comprehensive taxi and paratransit hailing app for Android and iOS, integrating TomTom's map SDK.<br />
          - Mentored junior developers, fostering collaboration and enhancing mobile development best practices.
        </p>
      </div>

      <div>
        <h3>Mobile Software/Firmware Developer - DDS Wireless International Inc. (July 2014 - Dec 2018)</h3>
        <p>
          - Developed and maintained a digital dispatch system on Android, significantly improving operational efficiency.<br />
          - Implemented automated testing with Jenkins, Robotium, and Sikuli, reducing manual testing efforts.<br />
          - Designed a taxi meter app for Android, providing accurate fare calculations and payment integration.<br />
          - Customized Android OS for a hardware device, including U-boot, USB drivers, and OTA package building.
        </p>
      </div>

      <div>
        <h3>Software Developer - Ensemble Systems Inc. (November 2011 - 2014)</h3>
        <p>
          - Developed native iOS apps for restaurant rating, movie schedules, and video streaming.<br />
          - Built a custom Digital Publishing Suite entitlement service for CQ5 and Tomcat.<br />
          - Developed a Windows 8 tablet video streaming app using C#, JavaScript, and HTML5.
        </p>
      </div>

      <div>
        <h3>Mobile Developer - TBA Digital Inc. (February 2011 - November 2011)</h3>
        <p>
          - Worked on the development and maintenance of mobile applications for Android and iOS platforms.
        </p>
      </div>

      <div>
        <h3>Software Developer - Kodak Graphic Communications Canada (October 2007 - November 2009)</h3>
        <p>
          - Developed key features for Prinergy Evo in C++, including Color Flow technology integration and CORBA interface.<br />
          - Built a new report demand feature and automated system statistics collection.<br />
          - Designed web interfaces using HTML, XSLT, XML, and JavaScript.
        </p>
      </div>
    </section>
  );
}

export default Experience;
