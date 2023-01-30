import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const avoFacts = [
  {
    title: 'Arepas are very healthy!',
    content:
      'The arepa is a perfect food for celiacs or for those who do not include gluten or wheat derivatives in their diet, since its base ingredient is corn.5. In addition to this, they are high in fiber and if you want during their preparation you can increase their fiber intake by adding oat flakes, grated vegetables or chia or flax seeds, for example.',
  },
  {
    title: 'There Are Almost 70 Types Of Arepas.',
    content:
      'It is well known that the variety of fillings that can be placed in the arepa is extensive, but what many do not know is that there are almost 70 types of arepas!!! Not only corn, there are also cassava, yams, plantains and more... And you can even add other ingredients to the dough',
  },
  {
    title: 'The Arepa, A Gift Of The Indigenous Tradition',
    content:
      'They were originated between Venezuela and Colombia. According to historical records, the indigenous cumanagotos -who inhabited what is now known as the state of Sucre in Venezuela- called the round-shaped corn preparation that they used to consume "erepa". From there and to this day is that these delicious little breads are called: "arepas"',
  },
  {
    title: 'The Wonderful Precooked Cornmeal.',
    content:
      'In the past, many Latin American mothers and grandmothers would get up very early to grind the corn needed to prepare the arepas. They used a huge pile of corn and piled for hours, which was heavy work. However, the way of preparation changed from 1960. With the advent of precooked corn flour, the process for making arepas was simplified, since it is not necessary to soak or grind the corn.',
  },
  {
    title: 'The Arepa, The Best Breakfast In The World.',
    content:
      'In 2014, the arepa ranked first as the best breakfast in the world in a Thrillist ranking, specializing in international travel, food and drinks. And it is that the arepas are very versatile and let the imagination work.',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          5 Interesting Facts About Arepas!
        </Header>
        <figure>
          <Image src="/images/arepas.png" alt="Arepas on a table" />
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="https://365sanguchez.com/arepa-origen-historia-curiosidades/#:~:text=La%20arepa%20es%20un%20s%C3%ADmbolo,remojar%20ni%20moler%20el%20ma%C3%ADz"
            >
              Taste of Home
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;

          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;

          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
