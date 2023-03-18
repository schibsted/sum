# Sum

<div align="center">

Sum, a powerful tool for enhancing your articles with the help of ChatGPT.

Developed in collaboration with [NRK](https://www.nrk.no/) and [VG](https://www.vg.no/) during an innovation day event.

|                         Start Page                          |                        Result Page                         |
| :---------------------------------------------------------: | :--------------------------------------------------------: |
| ![image of the start page](.github/imgs/start.png?raw=true) | ![image of the output page](.github/imgs/out.png?raw=true) |

</div>

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, configure the environment variables. Refer to the section below for details.

After setting up the environment variables, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the result.

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
OPENAI_API_KEY="" # Obtain this from OpenAI
OPENAI_GPT_MODEL="" # Specify the model to use (if not provided, the gpt-3.5-turbo model will be used by default)
```

## Contributing

Contributions are welcome! Jusy submit a pull request with your changes 🚀

If you want to contribute, but don't know how to code, please create an issue with your idea, and we'll see what we can do.

## Technologies used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI](https://openai.com/)

## Acknowledgments

- Ørjan Hafnor for the design
- Johannes Andersen for the initial code
- Danielle Chiosso Liu for prompt engineering and investigating ChatGPT performance
- [NRK](https://www.nrk.no/) and [VG](https://www.vg.no/) for fostering cross-media collaboration
