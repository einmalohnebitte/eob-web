// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { ShopsSideMenu } from "../ShopsSideMenu";

export default {
  title: "ShopsSideMenu",
} as Meta;

const data = {
  data: {
    shops: [
      {
        id: "ckn4npr2gire30c11pmhgnc65",
        name: "Softeis Hendrich",
        openinghours: "täglich 12:00-20:00",
        location: { latitude: 51.3447574, longitude: 12.357914 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4npru8arvb0b63oa9oher1",
        name: "Coffeestar",
        openinghours: "8-19",
        location: { latitude: 52.5476798, longitude: 13.3563426 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4npsm0iolm0a11tzkmhr3r",
        name: "Kutzner \u0026 Kutzner GmbH",
        openinghours: "Mo-Sa 8-20",
        location: { latitude: 52.5463248, longitude: 13.4134748 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4npu5kj96r0b07i9571hzl",
        name: "Café Gut Gezogen",
        openinghours: "Di - Fr 12 - 18 Uhr; Sa 10 - 19 Uhr; So 11 - 18 Uhr",
        location: { latitude: 52.5338325, longitude: 13.4152798 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4npwgwj97l0b07io4wrwcf",
        name: "Hacker Feinkost, Inh. Karin Wieser e.K.",
        openinghours: "Mo, Mi-Fr 8-13 u. 14-18 Uhr, Di 8-13; Sa 7-12",
        location: { latitude: 48.4637374, longitude: 11.9424955 },
        website: null,
        categories: [],
        shopTown: { name: "Moosburg" },
      },
      {
        id: "ckn4npx8oirfo0c11tf2afwiv",
        name: "Peri Feinkost",
        openinghours: "Di-Fr: 8-19h, Sa: 8-16h",
        location: { latitude: 48.0667626, longitude: 11.6664331 },
        website: null,
        categories: [],
        shopTown: { name: "Ottobrunn" },
      },
      {
        id: "ckn4npy0girgi0c11ly86grb2",
        name: "Bäckerei Ketterl",
        openinghours:
          "Mo. - Fr. 6:30 - 18:00 Uhr Sa 6:30-14:00 Uhr NOCH ANPASSEN",
        location: { latitude: 50.7032449, longitude: 12.3557735950649 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4npzk0jfiq0c48im7yo2z3",
        name: "Original Unverpackt",
        openinghours:
          "Mo. - Fr. 6:30 - 18:00 Uhr Sa 6:30-14:00 Uhr NOCH ANPASSEN",
        location: { latitude: 52.4977813, longitude: 13.4301896 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4nq0bsiwne0a44erpvs818",
        name: "Härtl-Café",
        openinghours: "Mo/Di geschlossen, Mi-So: 9-17 Uhr",
        location: { latitude: 48.4032873, longitude: 11.9908155 },
        website: null,
        categories: [],
        shopTown: { name: "Wartenberg" },
      },
      {
        id: "ckn4nq1vciwo20a44cg49lw48",
        name: "Restaurant Markt Koenig",
        openinghours: "Mo-Sa: 10 - 23 Uhr",
        location: {
          latitude: 53.556361949999996,
          longitude: 9.966196165419408,
        },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4nq2n4ionr0a11b0qegf6y",
        name: "Bäckerei-Konditorei Pritsch GmbH",
        openinghours: "Mo-Fr: 6.30-19h, Sa+So: 7-17h",
        location: {
          latitude: 53.567369400000004,
          longitude: 10.018538801696605,
        },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4nq46oj99x0b07sb5n28t2",
        name: "Bäckerei Meffert",
        openinghours: "Mo-Fr: 7:00-18 Uhr, Sa: 7:00-13 Uhr, So: 8:00-13:30",
        location: { latitude: 52.0278932, longitude: 8.8693592 },
        website: null,
        categories: [],
        shopTown: { name: "Lemgo" },
      },
      {
        id: "ckn4nq4ygj9ad0b07t8hfrpam",
        name: "Bäckerei Meffert",
        openinghours: "Mo-Fr: 8:00-18:00 Uhr, Sa: 7:30-15 Uhr",
        location: { latitude: 52.0865894, longitude: 8.7453291 },
        website: null,
        categories: [],
        shopTown: { name: "Bad Salzuflen" },
      },
      {
        id: "ckn4nq5q8iopg0a11nt6q7ffv",
        name: "unverpackt berlin",
        openinghours: "Mo-Fr 9.30-18.00 Sa 9.30-13.00",
        location: { latitude: 52.4493869, longitude: 13.6242669 },
        website: null,
        categories: [],
        shopTown: { name: "Berlin" },
      },
      {
        id: "ckn4nq79sjfkv0c488kawciug",
        name: "Bäckerei Breitner",
        openinghours:
          "Mo -Fr 06:00 - 14:00; Sa 06:00 - 12:00; So 07:30 - 10:30",
        location: { latitude: 48.500481, longitude: 11.5051313 },
        website: null,
        categories: [],
        shopTown: { name: "Hettenshausen" },
      },
      {
        id: "ckn4nq81kiri30c11ff89z227",
        name: "Metzgerei Pauleser",
        openinghours: "Mo - Fr: 6 - 18:00 Uhr, Sa: 6 - 14:00 Uhr",
        location: { latitude: 48.83281, longitude: 11.54556 },
        website: null,
        categories: [],
        shopTown: { name: "Kösching" },
      },
      {
        id: "ckn4nq8tciwpj0a4409kdip7s",
        name: "Bäckerei Breitner",
        openinghours:
          "Mo - Fr 05:15 - 18:30; Sa 05:15 - 13:00; So 07:30 - 12:00",
        location: { latitude: 48.527953, longitude: 11.510829 },
        website: null,
        categories: [],
        shopTown: { name: "Pfaffenhofen a.d.Ilm" },
      },
      {
        id: "ckn4nqacwarz00b63jsl4u5sq",
        name: "Ne \u0026 Me Imbiss",
        openinghours: "Mo - So 8 - 20 Uhr",
        location: { latitude: 48.1377038, longitude: 11.5518393 },
        website: null,
        categories: [],
        shopTown: { name: "Garching bei München" },
      },
      {
        id: "ckn4nqb4oj9ck0b07g2w4v51q",
        name: "Akdeniz Döner",
        openinghours: "10 - 21 Uhr",
        location: { latitude: 48.3069609, longitude: 11.908547 },
        website: null,
        categories: [],
        shopTown: { name: "Erding" },
      },
      {
        id: "ckn4nqbwgiwq20a44ek1b0te4",
        name: "AuffüllBar",
        openinghours: "Mo-Fr 09-19 Uhr, Sa 08-16 Uhr",
        location: { latitude: 48.7342643, longitude: 11.1806962 },
        website: null,
        categories: [],
        shopTown: { name: "Neuburg an der Donau" },
      },
      {
        id: "ckn4nqco8j9d20b07y3vcti3e",
        name: "Lehenmühle",
        openinghours:
          "Mo, Di, Do, Fr: 9:00 - 12:00 Uhr, 14:00 - 17:00 Uhr; Sa: 9:00 - 12:00 Uhr; Mittwoch geschlossen",
        location: { latitude: 48.6454986, longitude: 11.6247545 },
        website: null,
        categories: [],
        shopTown: { name: "Wolnzach" },
      },
      {
        id: "ckn4nqe7sior70a11c1vofsy7",
        name: "Käsehandel René Lang",
        openinghours: "Datensatz für Postanschrift, kein Verkaufspunkt",
        location: { latitude: 51.35863665, longitude: 12.358035810067546 },
        website: null,
        categories: [],
        shopTown: null,
      },
      {
        id: "ckn4nqezkiorl0a11c70djjgd",
        name: "freiTag bio | verpackungsfrei | idstein",
        openinghours: "Di - Fr 10 - 18 Uhr; Sa 10 - 14 Uhr",
        location: { latitude: 50.22139625, longitude: 8.271581950000005 },
        website: null,
        categories: [],
        shopTown: { name: "Neustadt a.d. Donau" },
      },
      {
        id: "ckn4nqgj4j9do0b07w9gjw0f8",
        name: "Bäckerei-Konditorei Pritsch GmbH",
        openinghours: "Mo-Fr: 6.30-18.30h, Sa: 6.30-12.30h, So: 8-12h",
        location: { latitude: 53.5761226, longitude: 10.0238954 },
        website: null,
        categories: [],
        shopTown: { name: "Hamburg" },
      },
      {
        id: "ckn4nqhawirjn0c115cslincf",
        name: "Café Mule",
        openinghours: "Mo-Fr 08:00-18:00 Sa 10:00-18:00",
        location: { latitude: 51.327947, longitude: 12.319965 },
        website: null,
        categories: [],
        shopTown: { name: "Leipzig" },
      },
    ],
    shopCategories: [
      {
        id: "ckl5ghuywqi5w0a587h1xtlix",
        name: "Süßwaren, Nüsse, Trockenfrüchte",
        isMain: true,
      },
      { id: "ckl5gi154kle50b10kzaiw8b9", name: "Schulkiosk", isMain: true },
      {
        id: "ckl5giaegkqou0b56t1g8osu4",
        name: "Ergänzungskategorie erfüllt",
        isMain: true,
      },
      { id: "ckl5giiw03m8g0902izffvtap", name: "Tiernahrung", isMain: true },
      {
        id: "ckl5gipu0klgu0b10uxrdyj99",
        name: "Spirituosen-/Ölläden",
        isMain: true,
      },
      {
        id: "ckl5giugoklhf0b106qzpsbgp",
        name: "Tee, Kaffe, Kräuter, Gewürzladen",
        isMain: true,
      },
      {
        id: "ckl5gj0mwts800b46mxcniukr",
        name: "Kosmetikprodukte",
        isMain: true,
      },
      { id: "ckl5gj4hsjj9209606mv8iajz", name: "Take away", isMain: true },
      {
        id: "ckl5gj94gjj9m096057jop3ht",
        name: "Bäckerei, Konditorei",
        isMain: true,
      },
      {
        id: "ckl5gjczcqibp0a58vg7zzyfq",
        name: "Kästheken, Feinkost",
        isMain: true,
      },
      {
        id: "ckl5gjgu8klie0b10gcas4kyz",
        name: "Fleisch-/Wursttheken",
        isMain: true,
      },
      { id: "ckn31r7bsd7130a44ncg6rapq", name: "Fisch", isMain: false },
      {
        id: "ckn31rkg0d2ul0c115nkze4ik",
        name: "Hygienereiniger",
        isMain: false,
      },
      { id: "ckn31rwsg54570b6330tyjcsm", name: "Obst/Gemüse", isMain: false },
      { id: "ckn31s4i8dmf30b07ollp4s7f", name: "Coffee to go", isMain: false },
    ],
    shopTowns: [
      {
        id: "ckn2zh9hcczm60a114vv4n282",
        name: "Aholming",
        location: { latitude: 48.735073, longitude: 12.911918 },
      },
      {
        id: "ckn2zh9hcd33j0a44huqs16vd",
        name: "Aerzen",
        location: { latitude: 52.049607, longitude: 9.263816 },
      },
      {
        id: "ckn2zh9hcdi5r0b07nl57f54u",
        name: "Amöneburg",
        location: { latitude: 50.799465, longitude: 8.941292 },
      },
      {
        id: "ckn2zh9hcdjp20c486dwcjdn5",
        name: "Aschheim",
        location: { latitude: 48.171348, longitude: 11.716035 },
      },
      {
        id: "ckn2zha9450dn0b63igz39pwj",
        name: "Aying",
        location: { latitude: 47.970018, longitude: 11.778709 },
      },
      {
        id: "ckn2zha9450dr0b631z9tlwre",
        name: "Bad Homburg vor der Höhe",
        location: { latitude: 50.222709, longitude: 8.628745 },
      },
      {
        id: "ckn2zha94cyaq0c11ok73ej7i",
        name: "Bad Driburg",
        location: { latitude: 51.736643, longitude: 9.017501 },
      },
      {
        id: "ckn2zha94d33o0a448der1r38",
        name: "Bad Nauheim",
        location: { latitude: 8.747361, longitude: 50.368111 },
      },
      {
        id: "ckn2zhb0wcyay0c11942lbzpd",
        name: "Bamberg",
        location: { latitude: 49.891604, longitude: 10.886848 },
      },
      {
        id: "ckn2zhb0wczmb0a114q64bt8r",
        name: "Bad Pyrmont",
        location: { latitude: 51.98505, longitude: 9.243464 },
      },
      {
        id: "ckn2zhb0wd33s0a44q8j7wgjw",
        name: "Bad Salzuflen",
        location: { latitude: 52.085745, longitude: 8.753442 },
      },
      {
        id: "ckn2zhb0wdi5z0b079uc1gka7",
        name: "Baiern",
        location: { latitude: 48.946756, longitude: 11.403872 },
      },
      {
        id: "ckn2zhbso50dx0b63yy7w6kdc",
        name: "Barntrup",
        location: { latitude: 51.990955, longitude: 9.112756 },
      },
      {
        id: "ckn2zhbsoczmg0a11e7sxwref",
        name: "Bennewitz",
        location: { latitude: 51.355124, longitude: 12.708974 },
      },
      {
        id: "ckn2zhbsod33z0a44dnxvkdak",
        name: "Bergkirchen",
        location: { latitude: 48.25857, longitude: 11.366686 },
      },
      {
        id: "ckn2zhbsodjpr0c48i28jssp2",
        name: "Bautzen",
        location: { latitude: 51.181391, longitude: 14.427574 },
      },
      {
        id: "ckn2zhckgd3430a44hefaw2fj",
        name: "Bevern",
        location: { latitude: 53.755519, longitude: 9.77115 },
      },
      {
        id: "ckn2zhckgdi650b0743wnvnuu",
        name: "Berlin",
        location: { latitude: 52.517036, longitude: 13.38886 },
      },
      {
        id: "ckn2zhckgdjq70c48747ovl9f",
        name: "Beverungen",
        location: { latitude: 51.667654, longitude: 9.375907 },
      },
      {
        id: "ckn2zhe4050e50b637nbawl9y",
        name: "Blindheim",
        location: { latitude: 48.631766, longitude: 10.618596 },
      },
      {
        id: "ckn2zhe40czmm0a11uceemlbm",
        name: "Bielefeld",
        location: { latitude: 52.0191, longitude: 8.531007 },
      },
      {
        id: "ckn2zhevscyb90c11bch4vgjy",
        name: "Bremerhaven",
        location: { latitude: 53.552226, longitude: 8.586551 },
      },
      {
        id: "ckn2zhevsczn90a11fsnpu3xp",
        name: "Bockhorn",
        location: { latitude: 48.313641, longitude: 11.98632 },
      },
      {
        id: "ckn2zhevsd3490a44xlc19y8n",
        name: "Blomberg",
        location: { latitude: 51.942431, longitude: 9.091901 },
      },
      {
        id: "ckn2zhevsdi6a0b073r4u517i",
        name: "Brakel",
        location: { latitude: 51.716889, longitude: 9.184176 },
      },
      {
        id: "ckn2zhfnk50e90b63g3xodpqi",
        name: "Bretten",
        location: { latitude: 47.701373, longitude: 7.068416 },
      },
      {
        id: "ckn2zhfnkcybd0c11egd3m8ff",
        name: "Dachau",
        location: { latitude: 48.259248, longitude: 11.435442 },
      },
      {
        id: "ckn2zhfnkd34d0a442neuu3w1",
        name: "Brunnthal",
        location: { latitude: 48.007314, longitude: 11.683456 },
      },
      {
        id: "ckn2zhfnkdi6e0b0775qrb44s",
        name: "Buchholz in der Nordheide",
        location: { latitude: 53.333302, longitude: 9.866665 },
      },
      {
        id: "ckn2zhfnkdjqd0c488qcmj6uw",
        name: "Buttenwiesen",
        location: { latitude: 48.605376, longitude: 10.722228 },
      },
      {
        id: "ckn2zhgfc50ed0b63pqaxke0n",
        name: "Donauwörth",
        location: { latitude: 48.718036, longitude: 10.78073 },
      },
      {
        id: "ckn2zhgfccznd0a11i53bq690",
        name: "Detmold",
        location: { latitude: 51.936284, longitude: 8.879153 },
      },
      {
        id: "ckn2zhgfcd34i0a44iwp0scbq",
        name: "Eching",
        location: { latitude: 48.3, longitude: 11.6167 },
      },
      {
        id: "ckn2zhgfcdi6i0b07lldjvzeu",
        name: "Dresden",
        location: { latitude: 51.049329, longitude: 13.738144 },
      },
      {
        id: "ckn2zhh7450ei0b63xviv3nz5",
        name: "Egenhofen",
        location: { latitude: 48.28281, longitude: 11.163847 },
      },
      {
        id: "ckn2zhh74cznk0a11kh6lsy8e",
        name: "Eichenau",
        location: { latitude: 48.17256, longitude: 11.322321 },
      },
      {
        id: "ckn2zhhywczno0a11b9u1vh1p",
        name: "Eilenburg",
        location: { latitude: 51.459892, longitude: 12.63345 },
      },
      {
        id: "ckn2zhiqocybj0c11uu7sx8tv",
        name: "Elmshorn",
        location: { latitude: 53.753249, longitude: 9.652456 },
      },
      {
        id: "ckn2zhiqod34n0a44gnwhfniz",
        name: "Erding",
        location: { latitude: 48.306444, longitude: 11.907658 },
      },
      {
        id: "ckn2zhjigcybn0c11x9xury3g",
        name: "Eschershausen",
        location: { latitude: 51.92702, longitude: 9.637622 },
      },
      {
        id: "ckn2zhjigcybs0c11s72fq4nz",
        name: "Feldkirchen",
        location: { latitude: 48.147577, longitude: 11.72992 },
      },
      {
        id: "ckn2zhjigdi6v0b07qdnkjttg",
        name: "Essen",
        location: { latitude: 51.458224, longitude: 7.015817 },
      },
      {
        id: "ckn2zhjigdjqk0c48dqivaimz",
        name: "Extertal",
        location: { latitude: 52.090665, longitude: 9.094782 },
      },
      {
        id: "ckn2zhka850eo0b631xzmnot7",
        name: "Feldkirchen-Westerham",
        location: { latitude: 47.901608, longitude: 11.839639 },
      },
      {
        id: "ckn2zhka850es0b63numvolc1",
        name: "Flintbek",
        location: { latitude: 54.243209, longitude: 10.063324 },
      },
      {
        id: "ckn2zhka8di700b07mk7hntmt",
        name: "Freiberg",
        location: { latitude: 47.99609, longitude: 7.8494 },
      },
      {
        id: "ckn2zhka8djqt0c48povaeraf",
        name: "Frankfurt am Main",
        location: { latitude: 50.110644, longitude: 8.682092 },
      },
      {
        id: "ckn2zhl2050f50b630ixwj8tf",
        name: "Garching bei München",
        location: { latitude: 48.251388, longitude: 11.650966 },
      },
      {
        id: "ckn2zhl20cznx0a11zeyd8nk7",
        name: "Fürstenfeldbruck",
        location: { latitude: 48.18138, longitude: 11.238212 },
      },
      {
        id: "ckn2zhl20d34s0a44cenxamxd",
        name: "Freising",
        location: { latitude: 48.400827, longitude: 11.743956 },
      },
      {
        id: "ckn2zhl20d34w0a44yvigwfvb",
        name: "Gaimersheim",
        location: { latitude: 48.806047, longitude: 11.367553 },
      },
      {
        id: "ckn2zhl20di740b07btbqe8xr",
        name: "Fürth",
        location: { latitude: 49.477263, longitude: 10.989616 },
      },
      {
        id: "ckn2zhlts50f90b63knxlbx52",
        name: "Germering",
        location: { latitude: 48.134004, longitude: 11.365731 },
      },
      {
        id: "ckn2zhltscyc60c11mmev4lte",
        name: "Gauting (Starnberg)",
        location: { latitude: 48.067669, longitude: 11.379699 },
      },
      {
        id: "ckn2zhltsd3560a44v32ogfzr",
        name: "Geretsried",
        location: { latitude: 47.864692, longitude: 11.479351 },
      },
      {
        id: "ckn2zhltsdjqy0c487aiih9t7",
        name: "Gauting",
        location: { latitude: -25.936344, longitude: 28.08131 },
      },
      {
        id: "ckn2zhmlkczo20a11w7l9j86p",
        name: "Gerolsbach",
        location: { latitude: 48.493744, longitude: 11.361896 },
      },
      {
        id: "ckn2zhmlkd35a0a44328cg890",
        name: "Gilching",
        location: { latitude: 48.114029, longitude: 11.292155 },
      },
      {
        id: "ckn2zhndcczo60a11p2gf7qgl",
        name: "Glienicke",
        location: { latitude: 13.332918, longitude: 52.633063 },
      },
      {
        id: "ckn2zhndcdjr30c485qphn1mm",
        name: "Gräfelfing",
        location: { latitude: 48.121204, longitude: 11.429978 },
      },
      {
        id: "ckn2zho54cycb0c11a1k6ek02",
        name: "Gröbenzell",
        location: { latitude: 48.194345, longitude: 11.370776 },
      },
      {
        id: "ckn2zho54czob0a11mhd95wkx",
        name: "Grafing",
        location: { latitude: 48.050286, longitude: 11.966134 },
      },
      {
        id: "ckn2zho54di7a0b0798fe7ee7",
        name: "Grafing",
        location: { latitude: 48.050286, longitude: 11.966134 },
      },
      {
        id: "ckn2zhowwdi7e0b07wc3z3sfp",
        name: "Grünwald",
        location: { latitude: 48.048656, longitude: 11.530073 },
      },
      {
        id: "ckn2zhowwdjr70c48jke79wqe",
        name: "Haar",
        location: { latitude: 48.106218, longitude: 11.72896 },
      },
      {
        id: "ckn2zhpoo50fe0b63rqf16hzb",
        name: "Hamburg",
        location: { latitude: 53.543764, longitude: 10.009913 },
      },
      {
        id: "ckn2zhpoocycf0c11rgm8xqno",
        name: "Hallbergmoos",
        location: { latitude: 11.744513, longitude: 48.318206 },
      },
      {
        id: "ckn2zhqggd35h0a44qud27rr6",
        name: "Herrsching am Ammersee",
        location: { latitude: 47.999293, longitude: 11.174808 },
      },
      {
        id: "ckn2zhqggdjrb0c48ywnykiim",
        name: "Herrenberg",
        location: { latitude: 48.595557, longitude: 8.867472 },
      },
      {
        id: "ckn2zhr8850fi0b63ozp7b7q5",
        name: "Hettenshausen",
        location: { latitude: 48.501351, longitude: 11.503276 },
      },
      {
        id: "ckn2zhr8850fm0b63g45r4tsn",
        name: "Höchstädt an der Donau",
        location: { latitude: 48.611431, longitude: 10.567098 },
      },
      {
        id: "ckn2zhr88d35l0a44uaboxuf5",
        name: "Hohenbrunn",
        location: { latitude: 48.048083, longitude: 11.702162 },
      },
      {
        id: "ckn2zhs00czon0a11ypb5j8iy",
        name: "Hohenkammer",
        location: { latitude: 48.423847, longitude: 11.522995 },
      },
      {
        id: "ckn2zhs00d35p0a44shj3s9li",
        name: "Höhenkirchen-Siegertsbrunn",
        location: { latitude: 48.020165, longitude: 11.717026 },
      },
      {
        id: "ckn2zhs00di7k0b074qql8s8v",
        name: "Holzkirchen",
        location: { latitude: 48.877035, longitude: 10.618716 },
      },
      {
        id: "ckn2zhsrsczor0a11z5wsc86r",
        name: "Holzminden",
        location: { latitude: 51.828835, longitude: 9.446659 },
      },
      {
        id: "ckn2zhsrsdi7p0b07avkrrp8q",
        name: "Horn-Bad Meinberg",
        location: { latitude: 51.880128, longitude: 8.97317 },
      },
      {
        id: "ckn2zhsrsdi820b07oc4k05h3",
        name: "Höxter",
        location: { latitude: 51.774737, longitude: 9.381688 },
      },
      {
        id: "ckn2zhtjkcycl0c11qgrgdg1c",
        name: "Ilmmünster",
        location: { latitude: 48.486855, longitude: 11.504128 },
      },
      {
        id: "ckn2zhtjkcycp0c118pw0xd6f",
        name: "Ingolstadt",
        location: { latitude: 48.763016, longitude: 11.42504 },
      },
      {
        id: "ckn2zhtjkcyct0c112pibau3y",
        name: "Ismaning",
        location: { latitude: 48.224243, longitude: 11.671526 },
      },
      {
        id: "ckn2zhubcczp20a11s3uqb6zz",
        name: "Kaufbeuren",
        location: { latitude: 47.880379, longitude: 10.622246 },
      },
      {
        id: "ckn2zhubcd3630a44m5t5tvho",
        name: "Karlsfeld",
        location: { latitude: 48.226632, longitude: 11.467639 },
      },
      {
        id: "ckn2zhubcdjrs0c480yselzv0",
        name: "Itzehoe",
        location: { latitude: 53.925032, longitude: 9.515585 },
      },
      {
        id: "ckn2zhubcdjrw0c48h06hs7cy",
        name: "Jetzendorf",
        location: { latitude: 48.43328, longitude: 11.41866 },
      },
      {
        id: "ckn2zhv3450fu0b63tapqw3iz",
        name: "Kirchdorf a.d.Amper",
        location: { latitude: 11.653654, longitude: 48.458756 },
      },
      {
        id: "ckn2zhv3450fz0b63g370kms5",
        name: "Kleinmachnow",
        location: { latitude: 13.22366, longitude: 52.406417 },
      },
      {
        id: "ckn2zhv34djs00c486jafqv0k",
        name: "Kelkheim",
        location: { latitude: 8.451911, longitude: 50.13757 },
      },
      {
        id: "ckn2zhvuwczp60a11bvzrrnrz",
        name: "Köln",
        location: { latitude: 50.938361, longitude: 6.959974 },
      },
      {
        id: "ckn2zhvuwczpb0a11t1rru645",
        name: "Krailling",
        location: { latitude: 48.099262, longitude: 11.405089 },
      },
      {
        id: "ckn2zhvuwd3680a446i3qsc3m",
        name: "Kösching",
        location: { latitude: 48.810464, longitude: 11.497114 },
      },
      {
        id: "ckn2zhwmod36c0a44ndagzkdx",
        name: "Kranzberg",
        location: { latitude: 46.522095, longitude: 7.980681 },
      },
      {
        id: "ckn2zhwmodi870b07lsanbsir",
        name: "Kühbach",
        location: { latitude: 11.186042, longitude: 48.490443 },
      },
      {
        id: "ckn2zhwmodi8c0b076pdqmn2k",
        name: "Landsberg am Lech",
        location: { latitude: 48.051497, longitude: 10.873773 },
      },
      {
        id: "ckn2zhxegcycz0c11oumxm012",
        name: "Langenpreising",
        location: { latitude: 48.425997, longitude: 11.973738 },
      },
      {
        id: "ckn2zhxegcyd40c113grdzbnc",
        name: "Leipzig",
        location: { latitude: 51.340632, longitude: 12.374733 },
      },
      {
        id: "ckn2zhxegdi8g0b07tcx9s5bo",
        name: "Landshut",
        location: { latitude: 48.536217, longitude: 12.151655 },
      },
      {
        id: "ckn2zhxegdjs60c48dtyk7yda",
        name: "Lemgo",
        location: { latitude: 52.028067, longitude: 8.901289 },
      },
      {
        id: "ckn2zhy6850g60b63kbvbvelw",
        name: "Ludwigsburg",
        location: { latitude: 48.895394, longitude: 9.189515 },
      },
      {
        id: "ckn2zhy68djsa0c48f6ch20si",
        name: "Lenting",
        location: { latitude: 48.810012, longitude: 11.456921 },
      },
    ],
    shopetypes: [],
  },
};

const Template: Story = (args) => (
  <>
    <ShopsSideMenu
      search={null}
      onSearch={() => {}}
      onClose={() => console.log("close")}
      onSelectCategory={(e) => console.log(e)}
      onSelectTown={(e) => console.log(e)}
      data={data.data as any}
      isOpen={true}
      isOpenMobile={true}
      selectedCategory={null}
      onSelectType={(e) => console.log(e)}
      selectedType={null}
    />
  </>
);

export const ShopsSideMenuStory = Template.bind({});
