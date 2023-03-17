# Sum

<div align="center">

Sum, the tool for understanding, assisting and making your articles reach the moon using OpenAI's GPT-3 API.

This was developed in collaboration with [NRK](https://www.nrk.no/) and [VG](https://www.vg.no/) as part of an innovation day.

|                         Start page                          |                        Result Page                         |
| :---------------------------------------------------------: | :--------------------------------------------------------: |
| ![image of the start page](.github/imgs/start.png?raw=true) | ![image of the output page](.github/imgs/out.png?raw=true) |

</div>

## Getting Started

First, you need to install the dependencies:

```bash
npm install
```

You then need to configure the environment variables. See the section below for more information.

After configuring environment variables, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

You will need to create a `.env` file in the root of the project and add the following environment variables:

```bash
OPENAI_API_KEY="" # Get this from OpenAI
OPENAI_GPT_MODEL="" # This is the model you want to use. (If not specified, it will use the gpt-3.5-turbo model)
```

## Contributing

Contributions are welcome! Just create a pull request with your changes 🚀

If you want to contribute, but don't know how to code, please create an issue with your idea and we'll see what we can do.

## Technologies used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI](https://openai.com/)

## Thanks to

- Ørjan Hafnor for the design
- Johannes Andersen for the initial code
- Danielle Chiosso Liu for being our prompt engineer and investigating ChatGPT performance
- [NRK](https://www.nrk.no/) and [VG](https://www.vg.no/) for the cross media collaboration
