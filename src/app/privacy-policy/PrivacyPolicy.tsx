import Paragraph from '@/components/Paragraph'
import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='py-8'>
      <div className='bg-white rounded-lg shadow-xl md:w-[90vw] w-[95vw] mx-auto p-4'>
        <h1 className='text-lg font-bold text-slate-900 my-1'>Privacy Policy</h1>
        <div>
          <Paragraph text='PAH Mataram built the SiPAHAM app as a Free app. This SERVICE is provided by PAH Mataram at no cost and is intended for use as is.'/>
          <Paragraph text='This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.'/>
          <Paragraph text='If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.'/>
          <Paragraph text='The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at SiPAHAM unless otherwise defined in this Privacy Policy.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Information Collection and Use</h1>
          <Paragraph text='For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.'/>
          <Paragraph text='The app does use third-party services that may collect information used to identify you.'/>
          <Paragraph text='Link to the privacy policy of third-party service providers used by the app'/>
          <a href="https://www.google.com/policies/privacy/" className='ml-3'>*  [Google Play Services](https://www.google.com/policies/privacy/)</a>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Log Data</h1>
          <Paragraph text='We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Cookies</h1>    
          <Paragraph text='Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device`s internal memory.'/>
          <Paragraph text='This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Service Providers</h1>
          <Paragraph text='We may employ third-party companies and individuals due to the following reasons:'/>
          <ul className='list-disc ml-8'>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li> To assist us in analyzing how our Service is used.</li>
          </ul>
          <Paragraph text='We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Security</h1>     
          <Paragraph text='We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Links to Other Sites</h1>   
          <Paragraph text='This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Children’s Privacy</h1>
          <Paragraph text='These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.'/>
          <Paragraph text='If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Changes to This Privacy Policy</h1>
          <Paragraph text='We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.'/>
          <Paragraph text='This policy is effective as of 2023-09-26'/>
          <h1 className='text-lg font-bold text-slate-900 my-1'>Contact Us</h1> 
          <Paragraph text='If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at litbangabhur@gmail.com.'/>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy