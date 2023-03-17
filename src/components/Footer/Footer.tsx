import { SVGProps } from 'react';

const navigation = {
  main: [
    {
      name: 'NRK',
      logo: (props: SVGProps<SVGSVGElement>) => (
        <svg
          viewBox="0 0 35 14"
          height="1.3em"
          aria-hidden="true"
          focusable="false"
          {...props}
        >
          <path
            fill="currentColor"
            d="M31.0878023 7.55918018c-.2517074-.42642875-.2661333-.68861697-.02338-1.10029556L34.399462 1h-4.6267395s-2.7797248 4.54205453-3.1597731 5.17316245c-.3764003.63027925-.3601505 1.02273292.0154208 1.67041405C27.0084185 8.49042897 29.7727225 13 29.7727225 13h4.6267395s-3.2751804-5.37353258-3.3116597-5.44081982M21.5941377 13h4.2077247V1h-4.2077247M18.9405537.77010873c-1.3163763 0-2.3817762 1.07539896-2.3817762 2.40310754 0 1.32687533 1.0653999 2.4056073 2.3817762 2.4056073 1.3185428 0 2.3884423-1.07873197 2.3884423-2.4056073 0-1.32770858-1.0698995-2.40310754-2.3884423-2.40310754M12.0635332 13h4.2052375V1h-4.2052375M0 13h4.19744416V1H0M9.50872938 2.92796177C9.29333553 1.82832914 8.33144198 1 7.17852938 1H4.47507953l2.71654925 12h4.56969912L9.50872938 2.92796177z"
          ></path>
        </svg>
      ),
      href: 'https://www.nrk.no/',
    },
    {
      name: 'VG',
      logo: (props: SVGProps<SVGSVGElement>) => (
        <svg
          height="1em"
          viewBox="0 0 80 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          {...props}
        >
          <path d="M80 13.333A2.667 2.667 0 0 1 77.333 16H46.667A2.667 2.667 0 0 1 44 13.333V2.667A2.667 2.667 0 0 1 46.667 0h30.666A2.667 2.667 0 0 1 80 2.667V4H68.8v-.534a1.6 1.6 0 0 0-1.6-1.6H56.8a1.6 1.6 0 0 0-1.6 1.6v9.067a1.6 1.6 0 0 0 1.6 1.6h10.4a1.6 1.6 0 0 0 1.6-1.6V9.067H62V7.2h18v6.133ZM13.813 16 0 0h13.281l7.969 9.6L29.219 0H42.5L28.687 16H13.813Z"></path>
        </svg>
      ),
      href: 'https://www.vg.no/',
    },
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                <item.logo />
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
