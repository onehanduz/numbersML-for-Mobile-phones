function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

let text = `000 sozlagich
001 soda(aprel)
002 zontik(qizil)
003 zomok(qora 7lik)
004 soch(parik)
005 solofon(oq 1 o'ram)
006 soya(moy)
007 Samurai(n)
008 sohibjamol(multik)
009 zoppi
010 zastoliya
011 saturn
012 sandiq
013 samalyot
014 zar(ko'k 1000lik)
015 salyut
016 saqich(chaynalgan)
017 zagolka(balonli)
018 zahar(kichik idishda)
019 zapas(ruchka)
020 Sezar
021 setka(temir o'ralgan)
022 sensor telefon
023 semichka(oq)
024 server
025 sel(toshli do'l)
026 seyf
027 sekret(pancreas)
028 sehrgar
029 sep(valli)
030 zizi(block)
031 Sit(muzlikdavri)
032 siniq(shisha)
033 sim(alumin oq o'ram)
034 sirkul
035 zil(moshina)
036 siqmon osh
037 sigaret(plmix pochka)
038 six(shashlik)
039 sipsa(uy)
040 sosiska
041 soat(qo'l)
042 Sonic
043 somon(pres)
044 sochnaya dalina
045 solyonniy
046 soqol koʻpirtirgich
047 zogʻora(idish)
048 sandal
049 sopol choynak
050 suzgich
051 sut
052 suvliq
053 uzum
054 surgi
055 zuluk
056 suyak(son)
057 sugʻur
058 samakat
059 zubachiska
060 sasori
061 sadaf
062 zanjir
063 samavar
064 sarimsoq
065 salla
066 Sai
067 Sakura
068 safro(oʻt pufagi)
069 sabzi
070 zerkalo
071 sedan
072 sennik
073 semiz
074 zaryatchik
075 selsiy gradusngi
076 zamok(eshikniki)
077 sekundamer
078 svetofor
079 zebra
080 sisterna
081 svarka
082 aseptik
083 simob
084 sirka
085 siydik
086 siyohdon
087 sigir
088 sifon(huqna)
089 sipsa
090 soʻska
091 soʻta
092 zoʻnd
093 soʻm(2000)
094 soʻrgʻich(bankali)
095 soʻshi
096 soʻyloqtish
097 soʻk
098 zogʻora(ovqat)
099 zubil
100 dozatir
101 totalizator(ball)
102 tovuq
103 tom(multik)
104 Tor
105 toshbaqa
106 toyo(multik)
107 tok
108 tongʻiz
109 doppi
110 dazmol
111 datchik
112 tandir
113 damas
114 tara
115 talaba kepkasi
116 taqa
117 taglik
118 taxta
119 tapichka
120 tezak
121 teteris
122 tennis(raketkasi)
123 temir
124 teri
125 telefon(eski)
126 Deydara
127 tegirmon
128 TV
129 aptechka
130 disk
131 titan
132 dinamit
133 timsoh
134 tirnoqolgich
135 til
136 tiqqin
137 tikoch
138 atirgul(butasi)
139 tipratikan
140 doska
141 totizm
142 tova
143 tomat
144 dori(multikdan)
145 doshirak
146 toylol xo't
147 doka
148 tovoq
149 to'ppi
150 tuz
151 tut(mevasi)
152 tuvak
153 tumor
154 turba
155 tulki
156 tuya
157 tugun
158 tufli
159 dubulg'a
160 dastak
161 dasta
162 danak
163 tamaki
164 tarhun
165 dash(increadibles)
166 Churry(Rick)
167 taksi
168 daftar
169 dab(asbob)
170 dezadarant(axe)
171 detektor(qo'lda)
172 anten
173 temiryo'l
174 terak
175 teleskop
176 telpak
177 deklaratsiya
178 teftel
179 tebrangich(mayatnik)
180 diskateka
181 diod lampa
182 dinozavr
183 DJ
184 atir
185 tish
186 tiyin
187 tikuv mashinasi
188 delfin
189 diplomat(azosi)
190 to's(stakan)
191 to'tiqush
192 to'n(chopon)
193 to'mirtqa
194 to'r(baliq uchun)
195 do'lana
196 to'y(kelin kuyov)
197 do'ktr Doom
198 to'fon
199 to'pponcha
200 nosvoy
201 nodirbek(tuz)
202 non
203 Venom
204 anor
205 voleybol(to'p)
206 un
207 nok
208 nova
209 Shvobra
210 nasos(suv)
211 vatin
212 nan(kasha)
213 namatak(shoxi_mevasi)
214 narda
215 valli(3digirchak)
216 nayza
217 vakum(nasosniki)
218 nax(ip)
219 naqsh(200somdafi)
220 Nescofe(3in1)
221 analizator(bioximya)
222 ventilyator
223 nemo(multik baliq)
224 vertalot
225 velosoped
226 neylon(jilka)
227 neksiya
228 nefrit(jade sword)
229 nebula
230 Gene(rick)
231 vitamin(shashlik)
232 vino
233 nimcha(spetsnaz)
234 virus(korana)
235 nishon(tir)
236 niqob(filmdagi actor)
237 salnik
238 nihol(oʻsmlik)
239 vibrator(qo'lni)
240 nosilka
241 vodoprovod
242 novot
243 nojdak qog'oz
244 voronka
245 volfram(lapochkaniki)
246 tvorog
247 nog'ora
248 norin
249 nobel belgisi
250 nusa
251 nutella
252 nunchaku
253 vanilin
254 nurari(n)
255 vulqon
256 nuqli(erik)
257 nuibari(n)
258 nux kemasi
259 nastarin
260 vaza
261 vata
262 ananas
263 vampir(minionsdagi)
264 varrak
265 naushnik
266 vaysaqi(multikdan)
267 vagon
268 vafli
269 naxang
270 nestagen(kasha)
271 devor
272 nevada(droj)
273 neji
274 otverka
275 veshelka
276 analizator(garmon)
277 vektor(mutikdan)
278 neft
279 narvon
280 visa karta
281 vitamin(yuldizchali)
282 ninachi
283 dvijok
284 sandvich
285 nilufargul
286 niqob (iti)
287 dvigitel(propnightdagi)
288 varata
289 turp
290 no'sqovoq
291 no'tabum
292 nonxoʻrak
293 vanna
294 no'rka(tumoq)
295 vo'lga mashini
296 vazelin
297 no'k bo'lish(pubg)
298 no'xat
299 Navro'z aka
300 mozor
301 mototsikl
302 monkey
303 momaqaldiroq(suskue)
304 morj
305 mol idish
306 joynamoz
307 mogʻor
308 moxov
309 mopet(3digirchak)
310 jaz(musiqasini_asbobi)
311 matras(qizil)
312 manjet
313 mamont
314 jar(qichqiradigan)
315 mashala
316 maysa
317 magnit
318 mahsi
319 mangal
320 jesko(aylantiradigani)
321 metr
322 meth
323 jempir
324 jerry
325 Tuco
326 meya(ari)
327 megajin(allouddind)
328 mehrob
329 mebel
330 mis_sim
331 mittivine
332 mina
333 minion
334 jirafa
335 miltiq(drabavik)
336 miyya
337 mikrofon
338 mixer
339 jib(shaq_shaq)
340 olmos
341 motor(lethal_com)
342 ijon
343 momiq
344 mochalki
345 molyuska
346 moychechak
347 moloko
348 mosh
349 mopet(2_digirchak)
350 muz
351 jgut
352 munchoq
353 mumya
354 murch(qora)
355 mushuk
356 militia(sherif)
357 muguz(o'rdakburun)
358 muhr(old_Poa)
359 murobbo
360 maska(yangi_yil)
361 armatur
362 manti
363 mammis
364 marjon(shodasi)
365 jalyuzi
366 jayra
367 makaron
368 olmaxon
369 masxaraboz
370 mezon(taroziga_oʻxshagan)
371 meduza
372 mentol(multik_panda)
373 metan(quyadigan)
374 meteorit
375 mesh
376 jelatin
377 megabot
378 jeton(kazinoni_puli)
379 malina
380 misr_sfinkisi
381 Misa Amani
382 minora
383 mimic
384 anjir
385 milky
386 jiyda
387 mikroskop
388 mix
389 jips(egizak monster)
390 mo's(ko'prik)
391 Mo'dok
392 monster(1ko'zli yashil)
393 mo'mo
394 mo'ris
395 MO'L
396 mo'yna
397 Joker(filmdan)
398 mors
399 Jobs(Stive)
400 rozetka
401 chodir
402 chovgum chaynik
403 rom(akfa)
404 chortoq(bloksuv)
405 rolikli kanki
406 choy(grant pochka)
407 rogatka
408 profil(potolog)
409 oʻchoq
410 rasm(monalisa)
411 radar
412 randa
413 ramka(Ikrombekniki)
414 charx
415 spiral
416 chaqaloq
417 chakchak
418 rapira
419 rapida
420 kreslo
421 rediska
422 tredmil
423 rejassiorni dubli
424 chertmak
425 Chel
426 krevetka
427 regbi to'pi 
428 rex(it)
429 rezva(yoradigan)
430 ris(telachki)
431 ritsor
432 chinor
433 chim(suvoʻt)
434 chichqon
435 chilm
436 chiy
437 chigit
438 shtrix
439 skripka
440 tros(metal)
441 elektrod
442 Ron(garrypoter)
443 choʻmich
444 terrorist
445 trol(ringof)
446 oʻroq
447 royal(pionino)
448 echki
449 probirka
450 rust(recycler)
451 Rudy(multikdan k)
452 ruvvatcha(multikdan)
453 chumoli
454 ruchka
455 rul
456 chumchuq
457 chuk
458 rux
459 chupak choy
460 rassengun
461 radio
462 chana
463 chamadon
464 charxpalak
465 chashka
466 chayka
467 chakidaxolta
468 raqqosa
469 krab
470 rezina
471 reduktor
472 rentgen
473 remont cho'tka
474 chertak
475 chelak
476 brezent
477 registon
478 rex(dinozavr)
479 aroq
480 chiz(ovqat)
481 chittak(jeck)
482 Rin
483 rim(Kolizey)
484 chira(oldingi)
485 chillak
486 chiyon
487 Rick
488 rif(karol oroli)
489 chibin
490 Roʻza(titanik)
491 cho't
492 cho'ntak
493 roʻmol
494 choʻchqa
495 cho'loq(kolyaskasi)
496 cho'yan
497 roʻk(conterdagi)
498 choʻx
499 cho'p
500 losos
501 lotok
502 shovurma
503 lom
504 lochin
505 shpatel
506 shoqol
507 lokomotiv
508 shox(molni)
509 lobzik
510 lazer
511 shatak(oladigan(prisep)
512 landish
513 sham
514 shar
515 shashka(donasi)
516 laylak
517 lak(trnoq uchun)
518 shaftoli
519 lab
520 lezva
521 led(lampa_kichkina)
522 lenta
523 lemur(julian)
524 sher
525 shelt(minecraft)
526 leykoplaster
527 lego
528 leaf(headquorter)
529 Mort
530 shpris
531 plita(gaz kichigi)
532 lineyka
533 limon
534 lichinka
535 shilliqurt(turbo_multik)
536 liqqildoq(koʻk multikdan)
537 Shikaku
538 shifer
539 shippak
540 los
541 shotlandlar chaladigan asbob
542 loviya
543 shompun
544 lochira(pachina)
545 lola
546 loy(poqopoq)
547 shokolad
548 shoha(o'rik)
549 lotareya
550 lavlagi
551 lut(yashik pubg)
552 luntik
553 shudring
554 shurip
555 shuvoq
556 luqma(chaynalgan non)
557 plug
558  lux salon(moshiniki)
559 lupa
560 plastinka(eski disklar)
561 latta
562 langar
563 shampanskiy
564 sharf
565 shalpon quloq,
566 laqqa
567 lagʼmon
568 shaxmat
569 labirint
570 shesterna
571 lethal comp(personaji)
572 lenta(izolenta)
573 lemur(marty)
574 sher(Scar(multik))
575 shelf(shield) 
576 sheyker termostat
577 lego(moshina)
578 leaf(heatband)
579 lampochka
580 list(temir)
581 shit(svetniki)
582 shina(moshina)
583 limuzin
584 lyre(chaladigan)
585 shisha
586 oshiq(suyak)
587 likopchalar
588 liftchik
589 shiponer
590 ilon
591 lo'tok(mayak)
592 uklo'n(shayton)
593 lo'm
594 shoʻrva
595 loʻli
596 aloe
597 lo'ki boshkiyimi
598 shoh(Ivan(multik))
599 lampa(nastolniy)
600 yostiq
601 yota(fleshka)
602 yongʻoq
603 qomat(balirina)
604 yorgʻi
605 qolib
606 yoqut
607 yogurt
608 qohrabo
609 qopqon
610 qazi
611 yadro(yerniki)
612 qandil
613 qamish
614 qargʻa
615 qalampir
616 qayroq
617 yagona(shemichka)
618 qafas
619 qabr
620 qayiq
621 qaldirgʻoch
622 yengiltak(xitoy qizlari)
623 yem(changʻoloq)
624 yer(shari)
625 yelpigʻich
626 yelim(chpin uchun)
627 yelka(wood)
628 qoq(baliq)
629 yepiskop (narsasi),
630 qisqich
631 qoziq tish
632 qin
633 qimor(2ta tosh)
634 qirgʻich
635 yiltiroq(tangadek yumoloq temir boʻlagi)
636 ayiq
637 yigirgich(spinnik)
638 qadah(shoxlarniki)
639 yib(shpakat)
640 qozon
641 yod
642 yova
643 yojik
644 qoraqurt(oʻrgimchak)
645 qoshiq
646 yoqa
647 yogʼ
648 qohira(idishlari)
649 yopgich(bankaniki)
650 yuzik(kumush olmosli)
651 qutb nuri
652 qunduz(bobo)
653 qumsoat
654 qurbaqa
655 yulduz
656 quyon
657 yuk(tashiydigan moshina)
658 qulf
659 qubba
660 qasr
661 qatl(kallani chopadigan)
662 yantoq
663 qamchi
664 qarmoq
665 yashik
666 qayish
667 Yak(zootopia)
668 yaxta
669 yapon(bayrogʻi)
670 oybaliq
671 Yeti(disney)
672 yeng
673 yem(kunjara)
674 yeryongʻoq
675 yelin
676 qobirgʻa(go'sht)
677 yek(startwarsdagi janchilar)
678 qon
679 yupi(lethal compa)
680 qizilmiya
681 qurt
682 qin(qilichniki)
683 qurum
684 qirqoyoq
685 qilich(eskalibur)
686 qiyom(patnusda)
687 yigirilgan(ip, koptokcha)
688 yurak
689 qipiq
690 qurol(elektroshokker)
691 qoʻtos
692 qoʻngʻiroq
693 qum
694 qoʻy
695 qoʻlqob
696 yoyo(o'yinchoq)
697 qo'gʻirchoq(qizbola)
698 yoga
699 yaloq
700 kosa(paxtagulli)
701 kotlet
702 konditsioner
703 kombayn
704 korita
705 kolonka
706 koyka
707 kokteyl
708 kofe(Maccofe_xolta)
709 kobalt
710 kaska
711 katyusha
712 gantel
713 kamalak
714 karam
715 kalkulyator
716 Kai(multikdan panda)
717 kaktus(tuvak)
718 kafan
719 kapgir
720 kesak
721 ketchup
722 gen(dnk)
723 krem
724 Kermit(baqa o'yinchoq)
725 gel(jgarrang idishda)
726 keys(orjaniki)
727 keks
728 kefir
729 kepka
730 kislorod(balon)
731 kit
732 kinokamera
733 Kimimaro
734 kirka
735 gilza
736 kiygiz
737 kiki(mushuk jahonakani)
738 gift
739 kiprik
740 kosmonavt
741 kodlash(matritsaniki)
742 konteyner
743 kompas
744 korona
745 kolyaska
746 koktayl(olovli, counter)
747 kokos
748 golf(to'pi)
749 kobra
750 gus(gʻoz)
751 (ovoz kuchaytirgich)
752 kungoboqar
753 gumma
754 kurka
755 kulcha(teshik)
756 gupsa
757 gugurt
758 kuhtränke(balonli sisterna)
759 kubog
760 kastrul
761 kat
762 kavush
763 kamer
764 karkidon
765 galstuk
766 Gayka(multik chip n del)
767 kaktus(mexico)
768 kafel
769 kapsula
770 Gezora(katta osminog)
771 ketmon
772 kenguru
773 echkemar
774 akkardion
775 kalpachok(valli)
776 geyzer
777 kegay
778 kaltakesak
779 kepak
780 kristal(gel)
781 gitara
782 kivi
783 argʻimchoq
784 kirsovun
785 gilam
786 kiyikoʻt(paketda)
787 Kiki(multikdan supurguli qiz)
788 g'ovush
789 gips(oyoqni)
790 koʻzoynak
791 Code(n)
792 kong(king)
793 koʻmir
794 koʻrshapalak
795 koʻlba
796 koala(hayvon)
797 koʻksulton
798 Goh(pokemon)
799 koʻprik(qzl)
800 fosfor(qizil)
801 xotira(motamsaro ona)
802 xonim(ovqat)
803 xomit
804 formula 1
805 xolva
806 foytun
807 xokkey(darvazobon)
808 fuck(qo'l)
809 folbinlar shari
810 xazina
811 xat(qizil shtampli konvert)
812 fanta
813 xamir
814 fara
815 xalta
816 haykal(ot ibod)
817 fakel
818 flamingo
819 xazarquti
820 (feska)
821 field effect transistor
822 fen
823 xema(reagent biximya)
824 ferzi
825 fleshka
826 feya(muktik piter pan)
827 Xekker maskasi(anynomimus)
828 faner
829 hepa filter
830 hizato(qrlsh pichog'i)
831 Hidan
832 xmen(volvorine)
833 XJM(o'yinchoq maymun)
834 firawn
835 fil
836 xmyx03wm
837 figura( konussimon yo'l chetida)
838 fifa(kubogi)
839 xiboba(kofe idishi)
840 fozzie bear
841 xodalar
842 fontan
843 hojatxona
844 xoch(chris)
845 xolva(razvisnoy)
846 friy(kartoshka)
847 xok(hindlarniki)
848 hofman(kir moshinasi)
849 hobel(stul standup)
850 fuse(mayda tranzistor)
851 futbol(darvoza)
852 fundament
853 hujayra
854 xurmo
855 xushtak(svestok)
856 huqna(zondi)
857 hulk
858 XLF F22A (moster moshina
859 humson
860 hassa
861 xatiko(it)
862 fantastik(4lik thing)
863 xamirturush(fariman)
864 farishta
865 xalqa(temir)
866 faylpapka
867 faks
868 xylophone
869 Habib
870 Xez dragon
871 Hades(eski poa)
872 fen(lethal)
873 xema(reagent IFA)
874 sfera(tosh uloqtirish)
875 fleshlight(lethal com)
876 kuchan
877 Fegor(anome)
878 futbol(bayroq)
879 Xebec(one piece)
880 hizato(qrlsh pichog'i) tig'i
881 Hidan tridenti
882 xivadagi kalta minor
883 fujer
884 hichko(tuxumsimon o'tiradigan)
885 filtr
886 hiakyu(tiny giant)
887 Fiks(multikdan)
888 Hifumi(anime)
889 Hippo(Moto moto(madagaskar))
890 xuroson(pachina)
891 xo'tik(yuriy)
892 fonatik
893 xachu
894 xoʻroz
895 folga
896 xoʻrazqand
897 ho'kiz
898 Fox(zootopia)
899 xandal
900 posilka(alexniki kulrang)
901 bodom
902 bovliq(eshilgan yekan)
903 pomidor
904 portfel
905 bolta
906 poqqildoq
907 boks(qo'lqobi)
908 probka
909 popuk
910 pasta(colgate)
911 pat
912 banan
913 bambuk
914 parta
915 palma
916 baqlajon
917 baklashka
918 paxta(ko'sakda)
919 bamper(mosvich)
920 bezbet(mushk)
921 pedal(popshak)
922 penal(akvorelniki)
923 beril
924 pero
925 belkurak
926 peyjer
927 peka
928 behi
929 baby boss(big boss)
930 pistolet
931 bita
932 pinset
933 bijanak
934 piramida
935 pishloq
936 piyoz
937 pikap
938 bifold wallet(kojny)
939 pipetka
940 bosmachaynik
941 podshinnik
942 bovur(jigar)
943 pompa(shlankasi)
944 bochka
945 pochna(kablok)
946 boyqush
947 pogon(yelkadagi)
948 box(ringi)
949 bobin
950 avtobus
951 budilnik(mexanik)
952 bun(10klikni oqi)
953 puma
954 burun
955 bulut
956 buyrak
957 bug'doy
958 bufer
959 bubler(chiqaradigan)
960 basketbol(savati)
961 patir
962 banka
963 pamada
964 baraban
965 palov
966 paypoq
967 bagaj(valliniki)
968 paxtapoya
969 papkam
970 bezak(babochka)
971 bedana(osgich)
972 benzopila
973 pechat
974 pech
975 beshik
976 belcha
977 begimot
978 behemoth(fil shoxli maymun)
979 baby boss(triplets)
980 bizon
981 pitsa
982 binokl
983 bint
984 pichqi
985 pilla
986 piyoda(zebra)
987 bigiz
988 bilyart(taxlangan)
989 biskvit
990 po'stloq
991 bo'tqa(masha)
992 ponny(yakkashox o'yinchoq)
993 boʻmba
994 bo'ri
995 poʻltoyoq
996 boʻq
997 boʻgʻirsoq
998 boʻxanka
999 pop it(qo'l bilan bosiladigan o'ynchq)`;

let system = text.split("\n");
let array = system.slice(500, 525);
shuffle(array);

let shuffled = array.join("\n");

console.log(shuffled);
