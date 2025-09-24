const valorInput = document.getElementById("valor");
const moedaDeSelect = document.getElementById("moeda-de");
const moedaParaSelect = document.getElementById("moeda-para");
const resultadoParagrafo = document.getElementById("resultado");

const API_KEY = "fca_live_1OiGBMtA1knKd1WBaJgziBrMjCd2xB9kU8JrqDcS";
const API_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`;

const currencyNames = {
  AUD: "Dólar Australiano",
  BRL: "Real Brasileiro",
  CAD: "Dólar Canadense",
  CHF: "Franco Suíço",
  CNY: "Yuan Chinês",
  EUR: "Euro",
  GBP: "Libra Esterlina",
  JPY: "Iene Japonês",
  USD: "Dólar Americano",
  ARS: "Peso Argentino",
  BOB: "Boliviano",
  CLP: "Peso Chileno",
  COP: "Peso Colombiano",
  UYU: "Peso Uruguaio",
  MXN: "Peso Mexicano",
  PYG: "Guarani Paraguaio",
  VES: "Bolívar Venezuelano",
  AED: "Dirham dos Emirados Árabes",
  AFN: "Afegane Afegão",
  ALL: "Lek Albanês",
  AMD: "Dram Armênio",
  ANG: "Florim das Antilhas Neerlandesas",
  AOA: "Kwanza Angolano",
  AWG: "Florim de Aruba",
  AZN: "Manat Azeri",
  BAM: "Marco Conversível da Bósnia e Herzegovina",
  BBD: "Dólar de Barbados",
  BDT: "Taka de Bangladesh",
  BGN: "Lev Búlgaro",
  BHD: "Dinar Bareinita",
  BIF: "Franco Burundiano",
  BMD: "Dólar das Bermudas",
  BND: "Dólar de Brunei",
  BSD: "Dólar das Bahamas",
  BTN: "Ngultrum do Butão",
  BWP: "Pula de Botsuana",
  BYN: "Rublo Bielorrusso",
  BZD: "Dólar de Belize",
  CDF: "Franco Congolês",
  CRC: "Colón Costa-Riquenho",
  CUP: "Peso Cubano",
  CVE: "Escudo de Cabo Verde",
  CZK: "Coroa Checa",
  DJF: "Franco do Djibuti",
  DKK: "Coroa Dinamarquesa",
  DOP: "Peso Dominicano",
  DZD: "Dinar Argelino",
  EGP: "Libra Egípcia",
  ERN: "Nakfa da Eritreia",
  ETB: "Birr Etíope",
  FJD: "Dólar de Fiji",
  FKP: "Libra das Ilhas Falkland",
  FOK: "Coroa feroesa",
  GEL: "Lari Georgiano",
  GHS: "Cedi Ganês",
  GIP: "Libra de Gibraltar",
  GMD: "Dalasi da Gâmbia",
  GNF: "Franco Guineense",
  GTQ: "Quetzal Guatemalteco",
  GYD: "Dólar da Guiana",
  HKD: "Dólar de Hong Kong",
  HNL: "Lempira de Honduras",
  HRK: "Kuna Croata",
  HTG: "Gourde Haitiano",
  HUF: "Forint Húngaro",
  IDR: "Rupia Indonésia",
  ILS: "Shekel Israelita",
  INR: "Rupia Indiana",
  IQD: "Dinar Iraquiano",
  IRR: "Rial Iraniano",
  ISK: "Coroa Islandesa",
  JMD: "Dólar Jamaicano",
  JOD: "Dinar Jordaniano",
  KES: "Xelim Queniano",
  KGS: "Som do Quirguistão",
  KHR: "Riel Cambojano",
  KID: "Dólar de Kiribati",
  KMF: "Franco Comoriano",
  KRW: "Won Sul-coreano",
  KWD: "Dinar Kuwaitiano",
  KYD: "Dólar das Ilhas Cayman",
  KZT: "Tenge Cazaque",
  LAK: "Kip Laosiano",
  LBP: "Libra Libanesa",
  LKR: "Rupia do Sri Lanka",
  LRD: "Dólar da Libéria",
  LSL: "Loti do Lesoto",
  LYD: "Dinar Líbio",
  MAD: "Dirham Marroquino",
  MDL: "Leu Moldavo",
  MGA: "Ariary Malgaxe",
  MKD: "Denar Macedônio",
  MMK: "Kyat Birmanês",
  MNT: "Tugrik Mongol",
  MOP: "Pataca de Macau",
  MRU: "Ouguiya Mauritana",
  MUR: "Rupia Mauriciana",
  MVR: "Rufiyaa Maldiva",
  MWK: "Kwacha Malauiano",
  MYR: "Ringgit Malaio",
  MZN: "Metical Moçambicano",
  NAD: "Dólar da Namíbia",
  NGN: "Naira Nigeriana",
  NIO: "Córdoba Nicaraguense",
  NOK: "Coroa Norueguesa",
  NPR: "Rupia Nepalesa",
  NZD: "Dólar Neozelandês",
  OMR: "Rial de Omã",
  PAB: "Balboa Panamenho",
  PEN: "Sol Peruano",
  PGK: "Kina da Papua-Nova Guiné",
  PHP: "Peso Filipino",
  PKR: "Rupia Paquistanesa",
  PLN: "Zloty Polonês",
  QAR: "Rial Catariano",
  RON: "Leu Romeno",
  RSD: "Dinar Sérvio",
  RUB: "Rublo Russo",
  RWF: "Franco Ruandês",
  SAR: "Rial Saudita",
  SBD: "Dólar das Ilhas Salomão",
  SCR: "Rupia Seichelense",
  SDG: "Libra Sudanesa",
  SEK: "Coroa Sueca",
  SGD: "Dólar de Cingapura",
  SHP: "Libra de Santa Helena",
  SLL: "Leone de Serra Leoa",
  SOS: "Xelim Somali",
  SRD: "Dólar Surinamês",
  SSP: "Libra Sul-Sudanesa",
  STN: "Dobra de São Tomé e Príncipe",
  SYP: "Libra Síria",
  SZL: "Lilangeni Suazi",
  THB: "Baht Tailandês",
  TJS: "Somoni Tajique",
  TMT: "Manat Turcomano",
  TND: "Dinar Tunisiano",
  TOP: "Pa'anga de Tonga",
  TRY: "Lira Turca",
  TTD: "Dólar de Trinidad e Tobago",
  TVD: "Dólar de Tuvalu",
  TWD: "Novo Dólar de Taiwan",
  TZS: "Xelim da Tanzânia",
  UAH: "Hryvnia Ucraniana",
  UGX: "Xelim de Uganda",
  UYU: "Peso Uruguaio",
  UZS: "Som Uzbeque",
  VND: "Dong Vietnamita",
  VUV: "Vatu de Vanuatu",
  WST: "Tala Samoano",
  XAF: "Franco CFA da África Central",
  XCD: "Dólar do Caribe Oriental",
  XDR: "Direitos de Saque Especiais",
  XOF: "Franco CFA da África Ocidental",
  XPF: "Franco CFP",
  YER: "Rial Iemenita",
  ZAR: "Rand Sul-Africano",
  ZMW: "Kwacha Zambiano",
  ZWL: "Dólar do Zimbábue",
};

async function buscarMoedas() {
  try {
    let moedas = Object.keys(currencyNames);
    moedas.sort();

    moedas.forEach((moeda) => {
      const optionDe = document.createElement("option");
      optionDe.value = moeda;
      optionDe.textContent = currencyNames[moeda] || moeda;
      moedaDeSelect.appendChild(optionDe);

      const optionPara = document.createElement("option");
      optionPara.value = moeda;
      optionPara.textContent = currencyNames[moeda] || moeda;
      moedaParaSelect.appendChild(optionPara);
    });
  } catch (error) {
    console.error("Erro ao buscar moedas:", error);
    resultadoParagrafo.textContent =
      "Erro ao carregar as moedas. Tente novamente mais tarde.";
  }
}

async function converter() {
  const valor = parseFloat(valorInput.value);
  const moedaDe = moedaDeSelect.value;
  const moedaPara = moedaParaSelect.value;

  if (isNaN(valor) || valor <= 0) {
    resultadoParagrafo.textContent = "Por favor, insira um valor válido.";
    return;
  }

  try {
    const response = await fetch(`${API_URL}&base_currency=${moedaDe}`);
    const data = await response.json();

    const taxaDeConversao = data.data[moedaPara];
    if (taxaDeConversao) {
      const resultado = valor * taxaDeConversao;
      resultadoParagrafo.textContent = `${valor} ${
        currencyNames[moedaDe] || moedaDe
      } = ${resultado.toFixed(2)} ${currencyNames[moedaPara] || moedaPara}`;
    } else {
      resultadoParagrafo.textContent =
        "Não foi possível encontrar a taxa de conversão.";
    }
  } catch (error) {
    console.error("Erro na conversão:", error);
    resultadoParagrafo.textContent =
      "Ocorreu um erro durante a conversão. Tente novamente mais tarde.";
  }
}

window.onload = buscarMoedas;