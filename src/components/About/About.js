import React from 'react';
import descriptionImage from '../../resources/images/about/aboutDesc.jpg';
//import backgroundImage from '../../resources/images/background/back19.jpg';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='desc'>
        <img className='descriptionImage' alt='description' src={descriptionImage}></img>
        <div className='description'>
          <p>
            קצת אחרת - אידה וזאבלחם, קפה, עוגות, מאפים "קצת אחרת" היא חנות קטנה ברחוב בית הפועלים 5 ברחובות. אצלנו בחנות
            תוכלו להנות ממגוון רחב של לחמים תוצרת "לחם תושיה" מסוגים שונים ומובחרים ובטעמים מיוחדים: פרג, זיתים, פירות
            יבשים, חמניות, דגנים, אגוזים ועוד... אנו מציעים לקהל הרחב גם לחמים ולחמניות מקמח חיטה מלאה, שיפון ולחם קל.
            בנוסף שפע של פשטידות, בלינצ'סים תוצרת בית, מאפים טריים יום יום, קפה איכותי, גבינות תוצרת חוץ ותוצרת הארץ
            (משק מרקוביץ'),סנדוויצ'ים טריים, עוגות, עוגיות, דבש וממרחים ועוד הרבה הפתעות טעימות. שירות חם ונעים עם חיוך
            רחב והרבה אהבה ב"קצת אחרת" נשמח לראותכם אצלנו. אידה וזאב
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
