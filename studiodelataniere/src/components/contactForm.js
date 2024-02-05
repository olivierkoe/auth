export default function Contact() {
  return (
    <>
      <div>
        <form
          className="flex flex-col"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            className=""
            type="hidden"
            name="access_key"
            value="79d2ff8a-6469-42de-8334-e244ce86f542"
          />
          <input
            className=""
            type="hidden"
            name="subject"
            value="New Submission from Web3Forms"
          />
          <label className="text-white my-5 text-3xl">Nom :</label>
          <input
            className="border-2 border-secondary bg-black text-white rounded-md text-xl"
            aria-label="name"
            type="text"
            name="name"
            required
          />
          <label className="text-white my-5 text-3xl">Email :</label>
          <input
            className="border-2 border-secondary bg-black text-white rounded-md text-xl"
            aria-label="email"
            type="email"
            name="email"
            required
          />
          <label className="text-white my-5 text-3xl">Téléphone :</label>
          <input
            className="border-2 border-secondary bg-black text-white rounded-md text-xl"
            aria-label="phone"
            type="phone"
            name="phone"
            required
          />
          <label className="text-white my-5 text-3xl">Votre message :</label>
          <textarea
            className="border-2 border-secondary bg-black text-white rounded-md text-xl"
            aria-label="message"
            required
            cols={10}
            rows={12}
          ></textarea>
          <input
            className="border-2 border-secondary bg-black text-white rounded-md text-xl"
            type="hidden"
            name="redirect"
            value="http://studiodelataniere.fr"
          />
          <input
            className="w-[300px] m-auto px-6 py-2.5 rounded-md bg-secondary mt-8 text-white hover:bg-blue-500 hover:text-white transition-all duration-300 "
            type="submit"
            value="Valider"
          />
        </form>
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </div>
    </>
  );
}
