import React from 'react';
import descriptionImage from '../../resources/images/about/aboutDesc.jpg';
//import backgroundImage from '../../resources/images/background/back19.jpg';
import './About.css';

const About = () => {
  return (
    <section className='about'>
      <div className='container desc-container'>
        <img className='descriptionImage' alt='description' src={descriptionImage}></img>
        <div className='description'>
          <p>
            "קצת אחרת אידה וזאב" - לחם, קפה, עוגות, מאפים. חנות קטנה ברחוב בית הפועלים 5 ברחובות. אצלנו בחנות תוכלו
            להנות ממגוון רחב של לחמים תוצרת "לחם תושיה" מסוגים שונים ומובחרים ובטעמים מיוחדים: פרג, זיתים, פירות יבשים,
            חמניות, דגנים, אגוזים ועוד... אנו מציעים לקהל הרחב גם לחמים ולחמניות מקמח חיטה מלאה, שיפון ולחם קל. בנוסף
            שפע של פשטידות, בלינצ'סים תוצרת בית, מאפים טריים, קפה איכותי, גבינות תוצרת חוץ ותוצרת הארץ (משק
            מרקוביץ'),סנדוויצ'ים טריים, עוגות, עוגיות, דבש וממרחים ועוד הרבה הפתעות טעימות. שירות חם ונעים עם חיוך רחב
            והרבה אהבה ב"קצת אחרת" נשמח לראותכם אצלנו. אידה וזאב.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
