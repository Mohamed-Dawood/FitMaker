import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        programs: 'Programs',
        coaching: 'Coaching',
        membership: 'Membership',
        about: 'About Us',
        login: 'Login',
        signup: 'Sign Up',
        lang: 'عربي',
        question: 'Question',
      },
      home: {
        title: 'Achieve your <1>fitness goal</1> with fitMaker',
        desc: 'Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?',
        start: 'Start Your journey',
        explore: 'Explore Programs',
      },
      statistics: {
        satisfaction: 'Client Satisfaction',
        satisfactionDesc: 'Our members love their results and experience',
        experience: 'years of Experience',
        experienceDesc: 'Trust in our proven track record of transforming',
        members: 'Active Members',
        membersDesc: 'Join our thriving fitness community',
        support: 'Support Available',
        supportDesc: 'Expert assistance whenever you need it',
      },
      progress: {
        title: 'our <1>progress</1>',
      },
      questions: {
        title: 'frequently asked <1>question</1>',
        faqs: [
          {
            title:
              'What is FitMaker and how can it help me reach my fitness goals?',
            content:
              "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
          },
          {
            title: 'How do I get started with a workout plan on FitMaker?',
            content:
              'To get started, sign up on our website, complete our fitness assessment questionnaire, and our system will generate a personalized workout plan based on your goals and fitness level. You can then connect with your dedicated trainer to begin your journey.',
          },
          {
            title: 'What is included in the custom plan?',
            content:
              'Each custom plan includes personalized workout routines, nutrition plans, progress tracking, weekly check-ins with your trainer, access to video tutorials, and community support forums.',
          },
          {
            title: 'Can I change my plan after signing up?',
            content:
              "Yes, you can modify your plan at any time. Contact your trainer or use our platform's plan adjustment feature to update your goals or preferences as needed.",
          },
          {
            title: 'What kind of support can I expect from my trainer?',
            content:
              'You can expect one-on-one coaching, weekly progress reviews, motivational support, answers to your fitness questions, and guidance on nutrition and exercise technique through our messaging system and scheduled video calls.',
          },
        ],
      },
      utilities: {
        title: 'our <1>utilities</1>',
        desc: 'What we do ?',
        items: [
          'Personalized Fitness Plans',
          'Strength Training Excellence',
          'Bodybuilding Program',
          'Cardiovascular Fitness Boost',
          'Weight Loss Journey',
          'Injury Rehabilitation Support',
          'Group Workout Sessions',
        ],
        readMore: 'read more',
      },
      footer: {
        about: 'Transform Your Body with FitMaker, Your Trusted Partner in Fitness.',
        tagline: 'Transform Your Body',
        description: 'With over 5 years of experience, we offer expert coaching, tailored workout plans, and comprehensive nutritional guidance. Start your journey towards a healthier, stronger you. Ready to make a change?',
        company: 'Company',
        companyLinks: ['About Us', 'Our Services', 'Careers', 'Blog', 'Testimonial', 'Contact Us'],
        resources: 'Resources',
        resourcesLinks: ['Fitness Tools', 'Workout Videos', 'Nutrition Guides', 'FAQ', 'Success Stories', 'Membership'],
        programs: 'Programs',
        programsLinks: ['Weight Loss', 'Building Muscles', 'Home Workout', 'Gym Plan', 'Our Plans', 'Fitness Group'],
        contact: 'Contact Us',
        contactInfo: [
          { icon: 'MapPin', text: 'Tanta, El Gharbia, Egypt' },
          { icon: 'Phone', text: '01062842697' },
          { icon: 'Mail', text: 'mohamedbasyonydawood@gmail.com' },
        ],
        attribution: 'Design by Mohamed Basyouni Dawood',
      },
      plans: {
        sectionTitle: 'Our Plans',
        sectionDesc:
          'Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.',
        monthly: 'Monthly',
        annually: 'Annually',
        pro: {
          package: 'Package',
          title: 'PRO PLAN',
          desc: 'Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!',
          features: [
            'Access To All Of Our Exercise Videos',
            'Progress Tracking',
            'Supportive Online Community',
            'Advanced, Personalized Workout Plans',
            'Comprehensive Nutrition Coaching',
            'Access to Additional Workout Programs',
            'Body Composition Analysis',
          ],
          priceMonthly: '19$',
          priceAnnually: '190$',
          price: '19$',
          button: 'Choose This Plan',
        },
        custom: {
          package: 'Package',
          title: 'CUSTOM PLAN',
          desc: 'Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.',
          features: [
            'Access To All Of Our Exercise Videos',
            'Progress Tracking',
            'Supportive Online Community',
            'Fully Customized Workout And Nutrition Plan',
            'Weekly Check-Ins With Your Trainer',
            'Exclusive Gear Discounts',
          ],
          priceMonthly: '30$',
          priceAnnually: '300$',
          price: '30$',
          button: 'Choose This Plan',
        },
        beginner: {
          package: 'Package',
          title: 'BEGINNER PLAN',
          desc: 'Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.',
          features: [
            'Access To All Of Our Exercise Videos',
            'Progress Tracking',
            'Supportive Online Community',
            'Personalized Workout Plans',
            'Basic Nutrition Guidance',
            'Access To Group Fitness Classes',
          ],
          priceMonthly: '22$',
          priceAnnually: '220$',
          price: '22$',
          button: 'Choose This Plan',
        },
        currency: 'USD',
      },
    },
  },
  ar: {
    translation: {
      navbar: {
        home: 'الرئيسية',
        programs: 'البرامج',
        coaching: 'التدريب',
        membership: 'العضوية',
        about: 'معلومات عنا',
        login: 'تسجيل الدخول',
        signup: 'إنشاء حساب',
        lang: 'EN',
        question: 'سؤال',
      },
      home: {
        title: 'حقق <1>هدفك الرياضي</1> مع فيت ميكر',
        desc: 'انضم إلى مجتمع فيت ميكر وغيّر رحلتك الرياضية. مدربونا الخبراء وبرامجنا المخصصة مصممة لمساعدتك على تحقيق أهدافك وتجاوز توقعاتك. جاهز للتغيير؟',
        start: 'ابدأ رحلتك',
        explore: 'استكشف البرامج',
      },
      statistics: {
        satisfaction: 'رضا العملاء',
        satisfactionDesc: 'أعضاؤنا يحبون نتائجهم وتجربتهم',
        experience: 'سنوات الخبرة',
        experienceDesc: 'ثق في سجلنا الحافل بتحقيق التحولات',
        members: 'الأعضاء النشطون',
        membersDesc: 'انضم إلى مجتمعنا الرياضي المزدهر',
        support: 'الدعم متوفر',
        supportDesc: 'مساعدة الخبراء متى احتجت إليها',
      },
      progress: {
        title: 'إنجازاتنا <1>',
      },
      questions: {
        title: 'الأسئلة <1>الشائعة</1>',
        faqs: [
          {
            title:
              'ما هو فيت ميكر وكيف يمكن أن يساعدني في تحقيق أهدافي الرياضية؟',
            content:
              'فيت ميكر هو منصة لياقة بدنية عبر الإنترنت تقدم خطط تمارين مخصصة، تدريبًا احترافيًا، وإرشادات غذائية شاملة. سواء كنت ترغب في فقدان الوزن، بناء العضلات، أو الحفاظ على لياقتك، برامجنا المصممة خصيصًا ودعم المجتمع سيساعدانك في تحقيق أهدافك.',
          },
          {
            title: 'كيف أبدأ بخطة التمارين على فيت ميكر؟',
            content:
              'لبدء الاستخدام، قم بالتسجيل في موقعنا، وأكمل استبيان التقييم الرياضي، وسيقوم نظامنا بإنشاء خطة تمارين مخصصة بناءً على أهدافك ومستوى لياقتك. يمكنك بعد ذلك التواصل مع مدربك الخاص لبدء رحلتك.',
          },
          {
            title: 'ماذا تتضمن الخطة المخصصة؟',
            content:
              'كل خطة مخصصة تتضمن جداول تمارين شخصية، خطط تغذية، تتبع التقدم، مراجعات أسبوعية مع المدرب، الوصول إلى فيديوهات تعليمية، ومنتديات دعم المجتمع.',
          },
          {
            title: 'هل يمكنني تغيير خطتي بعد التسجيل؟',
            content:
              'نعم، يمكنك تعديل خطتك في أي وقت. تواصل مع مدربك أو استخدم ميزة تعديل الخطة في منصتنا لتحديث أهدافك أو تفضيلاتك حسب الحاجة.',
          },
          {
            title: 'ما نوع الدعم الذي يمكنني توقعه من المدرب؟',
            content:
              'يمكنك توقع تدريب فردي، مراجعات تقدم أسبوعية، دعم تحفيزي، إجابات على أسئلتك الرياضية، وإرشادات حول التغذية وتقنيات التمارين من خلال نظام الرسائل وجلسات الفيديو المجدولة.',
          },
        ],
      },
      utilities: {
        title: 'خدماتنا <1>',
        desc: 'ماذا نقدم؟',
        items: [
          'خطط لياقة بدنية مخصصة',
          'تميز في تدريب القوة',
          'برنامج كمال الأجسام',
          'تعزيز اللياقة القلبية',
          'رحلة فقدان الوزن',
          'دعم إعادة التأهيل من الإصابات',
          'جلسات تمارين جماعية',
        ],
        readMore: 'اقرأ المزيد',
      },
      footer: {
        about: 'حوّل جسمك مع FitMaker، شريكك الموثوق في اللياقة.',
        tagline: 'حوّل جسمك',
        description: 'بخبرة تزيد عن ٥ سنوات، نقدم تدريبًا احترافيًا، خطط تمارين مخصصة، وإرشادات غذائية شاملة. ابدأ رحلتك نحو صحة أفضل وجسم أقوى. جاهز للتغيير؟',
        company: 'الشركة',
        companyLinks: ['معلومات عنا', 'خدماتنا', 'الوظائف', 'المدونة', 'آراء العملاء', 'تواصل معنا'],
        resources: 'الموارد',
        resourcesLinks: ['أدوات اللياقة', 'فيديوهات التمارين', 'أدلة التغذية', 'الأسئلة الشائعة', 'قصص النجاح', 'العضوية'],
        programs: 'البرامج',
        programsLinks: ['فقدان الوزن', 'بناء العضلات', 'تمارين منزلية', 'خطة الجيم', 'خططنا', 'مجموعة اللياقة'],
        contact: 'تواصل معنا',
        contactInfo: [
          { icon: 'MapPin', text: 'مصر-  طنطا - الغربية' },
          { icon: 'Phone', text: '٠١٠٦٢٨٤٢٦٩٧' },
          { icon: 'Mail', text: 'mohamedbasyonydawood@gmail.com' },
        ],
        attribution: 'تصميم محمد بسيوني داود',
      },
      plans: {
        sectionTitle: 'خططنا',
        sectionDesc:
          'اختر الخطة التي تناسب أهدافك الرياضية ودع خبراءنا يوجهونك في كل خطوة.',
        monthly: 'شهري',
        annually: 'سنوي',
        pro: {
          package: 'الباقة',
          title: 'خطة المحترفين',
          desc: 'توفر خطة المحترفين تدريبات متقدمة وإرشادات تغذية مخصصة لمساعدتك على تحقيق أهدافك بسرعة أكبر. سجّل الآن!',
          features: [
            'الوصول إلى جميع فيديوهات التمارين',
            'تتبع التقدم',
            'مجتمع داعم عبر الإنترنت',
            'خطط تمارين متقدمة ومخصصة',
            'إرشادات تغذية شاملة',
            'الوصول إلى برامج تمارين إضافية',
            'تحليل مكونات الجسم',
          ],
          priceMonthly: '١٩$',
          priceAnnually: '١٩٠$',
          price: '١٩$',
          button: 'اختر هذه الخطة',
        },
        custom: {
          package: 'الباقة',
          title: 'خطة مخصصة',
          desc: 'احصل على تجربة لياقة مخصصة بالكامل مع خطة مخصصة ومدرب خاص لتحقيق أهدافك.',
          features: [
            'الوصول إلى جميع فيديوهات التمارين',
            'تتبع التقدم',
            'مجتمع داعم عبر الإنترنت',
            'خطة تمارين وتغذية مخصصة بالكامل',
            'متابعة أسبوعية مع المدرب',
            'خصومات حصرية على المعدات',
          ],
          priceMonthly: '٣٠$',
          priceAnnually: '٣٠٠$',
          price: '٣٠$',
          button: 'اختر هذه الخطة',
        },
        beginner: {
          package: 'الباقة',
          title: 'خطة المبتدئين',
          desc: 'ابدأ رحلتك الرياضية مع خطة المبتدئين. ابنِ أساسًا قويًا مع تمارين أساسية وإرشادات تغذية.',
          features: [
            'الوصول إلى جميع فيديوهات التمارين',
            'تتبع التقدم',
            'مجتمع داعم عبر الإنترنت',
            'خطط تمارين مخصصة',
            'إرشادات تغذية أساسية',
            'الوصول إلى حصص اللياقة الجماعية',
          ],
          priceMonthly: '٢٢$',
          priceAnnually: '٢٢٠$',
          price: '٣٠$',
          button: 'اختر هذه الخطة',
        },
        currency: 'دولار',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
