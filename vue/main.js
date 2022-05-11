Vue.createApp({
  data() {
      return {
          message: 'Hello Vue!',
          header: {
              title: 'Rohadatul Aisy',
              desc: 'This is my First Portofolio Website',
              imageProfile: "https://raw.githubusercontent.com/Rohadaisy/tekweb2022/master/img/aisy3.jpg"
          },
          about1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos distinctio eaque porro tenetur doloribus dolorum voluptates facilis. Enim, illum',
          about2 : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione quas deleniti, eligendi sed beatae nobis sunt consequatur laudantium libero. Eum consequuntur odio perferendis numquam dolorum commodi modivoluptate praesentium.',
          projects: [
              {
                  title: 'Article 1',
                  desc: '"Loving yourself starts with liking yourself, which starts with respecting yourself, which starts with thinking of yourself in positive ways." - Jerry Corsten',
                  image: 'https://raw.githubusercontent.com/Rohadaisy/tekweb2022/master/img/projects/cat1.jpg'
              },
              {
                  title: 'Article 2',
                  desc: '"Do not forget;beautiful sunsets needs cloudy skies." - Paulo Coelho',
                  image: 'https://raw.githubusercontent.com/Rohadaisy/tekweb2022/master/img/projects/cat5.jpg'
              },
              {
                  title: 'Article 3',
                  desc: '"Sometimes life does not give you what you want, not because you do nott deserve it, but because you deserve so much more."',
                  image: 'https://raw.githubusercontent.com/Rohadaisy/tekweb2022/master/img/projects/cat3.jpg'
              },
              {
                  title: 'Article 4',
                  desc: '"We have certainly created man in the best of stature." - At Tiin: 4',
                  image: 'https://raw.githubusercontent.com/Rohadaisy/tekweb2022/master/img/projects/cat4.jpg'

              },
              {
                title: 'Article 5',
                desc: '"You are yours yourself not theirs or anyone else."',
                image: 'https://raw.githubusercontent.com/Rohadaisy/tekweb2022/master/img/projects/cat2.jpg'

            }
          ]
      }
  }
}).mount('#app')


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


})()