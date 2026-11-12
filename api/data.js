export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const { db } = req.query; // Frontend se database ka naam aayega

  const databases = {
      "nnnnnn": "https://nnnnnn-fab6a-default-rtdb.firebaseio.com",
      "maaytmi": "https://maaytmi-default-rtdb.firebaseio.com",
      "dhoni_ji": "https://dhoni-ji-default-rtdb.firebaseio.com",
      "pnkjgds": "https://pnkjgds-default-rtdb.firebaseio.com",
      "vivov": "https://vivov-df9bb-default-rtdb.firebaseio.com",
      "hggeefcggj": "https://hggeefcggj-default-rtdb.firebaseio.com",
      "madhu838": "https://madhu838-18bac-default-rtdb.firebaseio.com",
      "kkdkumar": "https://kkdkumar-4e971-default-rtdb.firebaseio.com",
      "ramu-admin-panel": "https://ramu-admin-panel-default-rtdb.firebaseio.com",
      "maja": "https://maja-d960d-default-rtdb.asia-southeast1.firebasedatabase.app",
      "faizybro": "https://faizybro-default-rtdb.firebaseio.com",
      "choduu00111": "https://choduu00111-default-rtdb.firebaseio.com",
      "rahul-panel": "https://rahul-panel-default-rtdb.firebaseio.com",
      "rahul-panel-d6e78": "https://rahul-panel-d6e78-default-rtdb.firebaseio.com",
      "dk-panel": "https://dk-panel-default-rtdb.firebaseio.com",
      "do-admin-v13": "https://do-admin-v13-default-rtdb.firebaseio.com",
      "do-admin-v16": "https://do-admin-v16-default-rtdb.firebaseio.com",
      "do-admin-v21": "https://do-admin-v21-default-rtdb.firebaseio.com",
      "lodarasun": "https://lodarasun-52af9-default-rtdb.firebaseio.com",
      "kajalkumari": "https://kajalkumari-4d7a5-default-rtdb.firebaseio.com",
      "dipukumar21": "https://dipukumar21-9cc34-default-rtdb.firebaseio.com",
      "zindagi": "https://zindagi-f8a52-default-rtdb.firebaseio.com",
      "orukd": "https://orukd-1e1c7-default-rtdb.firebaseio.com",
      "senu": "https://senu-cbca6-default-rtdb.firebaseio.com",
      "ajashsingh": "https://ajashsingh-4ecd4-default-rtdb.firebaseio.com",
      "kund": "https://kund-c0b31-default-rtdb.firebaseio.com",
      "rudraapk": "https://rudraapk-f3779-default-rtdb.asia-southeast1.firebasedatabase.app",
      "saaasaa": "https://saaasaa-c28c1-default-rtdb.firebaseio.com",
      "bibli-roy": "https://bibli-roy-default-rtdb.firebaseio.com",
      "admin-22": "https://admin-22-8dbcc-default-rtdb.firebaseio.com",
      "ashokmahra": "https://ashokmahra-4a762-default-rtdb.firebaseio.com",
      "bewafa": "https://bewafa-f42d3-default-rtdb.firebaseio.com",
      "ilohsh": "https://ilohsh-default-rtdb.firebaseio.com",
      "jassi": "https://jassi-952bc-default-rtdb.firebaseio.com",
      "juss-pilado": "https://juss-pilado-default-rtdb.firebaseio.com",
      "kajumyjann": "https://kajumyjann-default-rtdb.firebaseio.com",
      "kalihumai": "https://kalihumai-f9826-default-rtdb.firebaseio.com",
      "kamlusinghaniya": "https://kamlusinghaniya-f05d5-default-rtdb.firebaseio.com",
      "mosa-j": "https://mosa-j-default-rtdb.firebaseio.com",
      "ownerison": "https://ownerison-3da10-default-rtdb.firebaseio.com",
      "ranjit": "https://ranjit-58640-default-rtdb.firebaseio.com",
      "rosni": "https://rosni-9bb5c-default-rtdb.firebaseio.com",
      "sannn": "https://sannn-5d617-default-rtdb.firebaseio.com",
      "sumni": "https://sumnmmn-default-rtdb.firebaseio.com",
      "super-admin": "https://super-admin-240f4-default-rtdb.firebaseio.com",
      "tekoff": "https://tekoff-7a789-default-rtdb.firebaseio.com",
      "xxxxz": "https://xxxxz-2e129-default-rtdb.firebaseio.com",
      "simran": "https://simran-2f56c-default-rtdb.firebaseio.com",
      "panel-jack": "https://panel-jack-default-rtdb.firebaseio.com",
      "dippsanj": "https://dippsanj-4fe1c-default-rtdb.firebaseio.com",
      "akshhhhhhh": "https://akshhhhhhh-default-rtdb.firebaseio.com",
      "kaha": "https://kaha-9d4ce-default-rtdb.firebaseio.com",
      "point": "https://point-cb8cd-default-rtdb.asia-southeast1.firebasedatabase.app",
      "kundanmandal": "https://kundanmandal-762bf-default-rtdb.firebaseio.com",
      "jime": "https://jime-10a55-default-rtdb.firebaseio.com",
      "uuuu": "https://uuuu-c9515-default-rtdb.firebaseio.com",
      "pussy": "https://pussy-25f3c-default-rtdb.firebaseio.com",
      "newbhai": "https://newbhai-99806-default-rtdb.firebaseio.com",
      "mr-alone": "https://mr-alone-59577-default-rtdb.asia-southeast1.firebasedatabase.app",
      "sala-v1": "https://sala-v1-410b3-default-rtdb.firebaseio.com",
      "pogddsszx": "https://pogddsszx-default-rtdb.firebaseio.com",
      "alok5u2": "https://alok5u2-default-rtdb.firebaseio.com",
      "fwwg": "https://fwwg-d04bc-default-rtdb.firebaseio.com",
      "kunal": "https://kunal-86274-default-rtdb.firebaseio.com",
      "nyawala": "https://nyawala-3e7c3-default-rtdb.asia-southeast1.firebasedatabase.app",
      "subjuoeh": "https://subjuoeh-default-rtdb.firebaseio.com",
      "room-hotel": "https://room-hotel-default-rtdb.firebaseio.com",
      "bhaiyaha-ka": "https://bhaiyaha-ka-bcbcd-default-rtdb.firebaseio.com",
      "rk-panell": "https://rk-panell-default-rtdb.firebaseio.com",
      "sunil-da": "https://sunil-da-default-rtdb.firebaseio.com",
      "bhaiyaka": "https://bhaiyaka-bcbcd-default-rtdb.firebaseio.com",
      "teddymcdonald": "https://teddymcdonald-81002-default-rtdb.firebaseio.com",
      "ranu": "https://ranu-e604c-default-rtdb.firebaseio.com",
      "bhaiyanka": "https://bhaiyanka-bcbcd-default-rtdb.firebaseio.com",
      "mrdevilmd": "https://mrdevilmd-51586-default-rtdb.firebaseio.com",
      "bhogta": "https://bhogta-34897-default-rtdb.firebaseio.com",
      "gadhalalund": "https://gadhalalund-default-rtdb.firebaseio.com",
      "hirababuram": "https://hirababuram-76a2f-default-rtdb.firebaseio.com",
      "ajuk": "https://ajuk-4a6ce-default-rtdb.firebaseio.com",
      "qe1037": "https://qe1037-5c1d3-default-rtdb.firebaseio.com",
      "jabbashaw": "https://jabbashaw-default-rtdb.firebaseio.com",
      "bjp": "https://bhartiyajantaparty-58d7a-default-rtdb.europe-west1.firebasedatabase.app",
      "deepak": "https://deepak-5fc1e-default-rtdb.firebaseio.com",
      "customer-support": "https://customer-support-5-default-rtdb.firebaseio.com",
      "rajlonda": "https://rajlonda-5cf7b-default-rtdb.firebaseio.com",
      "krishna": "https://krishna5454-94fc5-default-rtdb.firebaseio.com"
  };

  const results = {};

  // Agar frontend ne koi specific DB manga hai
  if (db && db !== 'ALL') {
    if (databases[db]) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); 
        const response = await fetch(`${databases[db]}/.json`, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (response.ok) {
          const data = await response.json();
          if (data) results[db] = data;
        }
      } catch (e) {}
    }
  } 
  // Agar "ALL" manga hai, toh hum sirf top 10 databases fetch karke bhejenge taaki memory crash na ho
  else {
    const entries = Object.entries(databases).slice(0, 10); 
    await Promise.all(entries.map(async ([name, url]) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const response = await fetch(`${url}/.json`, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (response.ok) {
          const data = await response.json();
          if (data) results[name] = data;
        }
      } catch (e) {}
    }));
  }

  res.status(200).json(results);
}