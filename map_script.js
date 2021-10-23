var activePolygon;

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('polygon') || e.target.classList.contains('polygon-overlay') || e.target.id == 'map') {
    if (activePolygon) {
      activePolygon.classList.remove('polygon-active');
    }
    e.target.classList.add('polygon-active');
    activePolygon = e.target;
	}
});

var map;

DG.then(function () {
    map = DG.map('map', {
      center: [55.64116, 51.816958],
      zoom: 14,
      zoomSnap: 0.3,
      zoomDelta: 0.3, 
      maxBounds: DG.latLngBounds(DG.latLng(55.701068, 51.950027), DG.latLng(55.501478, 51.658565))
    });
  
    /*k9a*/DG.polygon([[55.63183, 51.820575], [55.633466, 51.82041], [55.634329, 51.821735], [55.635524, 51.823542], [55.63465, 51.8268], [55.632904, 51.827007], [55.632878, 51.826505], [55.632036, 51.826585]], {className: 'polygon', fillColor: '#33b800'}).addTo(map).bindPopup('<h2>Квартал 9А</h2><br>Количество автомобилей: <strong>237</strong><br>Плотность парковки: <strong>2155 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k8*/DG.polygon([[55.635009, 51.811499], [55.634435, 51.813657], [55.634172, 51.815346], [55.634085, 51.817963], [55.633263, 51.819682], [55.630928, 51.816096], [55.631499, 51.814804], [55.63363, 51.810422], [55.633749, 51.810345], [55.634154, 51.810198]], {className: 'polygon', fillColor: '#46a700'}).addTo(map).bindPopup('<h2>8-й квартал</h2><br>Количество автомобилей: <strong>424</strong><br>Плотность парковки: <strong>2827 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k9*/DG.polygon([[55.637644, 51.815573], [55.635606, 51.823245], [55.633283, 51.819713], [55.634122, 51.817988], [55.634211, 51.815361], [55.634469, 51.813671], [55.635033, 51.811543], [55.637564, 51.815406]], {className: 'polygon', fillColor: '#549a00'}).addTo(map).bindPopup('<h2>9-й квартал</h2><br>Количество автомобилей: <strong>597</strong><br>Плотность парковки: <strong>3317 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*36b*/DG.polygon([[55.614544, 51.785311], [55.61539, 51.786517], [55.615552, 51.78776], [55.615581, 51.788327], [55.615551, 51.78942], [55.615576, 51.78966], [55.615662, 51.789971], [55.61581, 51.790189], [55.618806, 51.792862], [55.618724, 51.793305], [55.618587, 51.794432], [55.618557, 51.795929], [55.61865, 51.796337], [55.6194, 51.797498], [55.618014, 51.800343], [55.617891, 51.80046], [55.617604, 51.79922], [55.616335, 51.795634], [55.615909, 51.793905], [55.615684, 51.792919], [55.614943, 51.791996], [55.613957, 51.790011], [55.613796, 51.789122], [55.613698, 51.787709], [55.613858, 51.786845]], {className: 'polygon', fillColor: '#4ea000'}).addTo(map).bindPopup('<h2>Микрорайон 36Б</h2><br>Количество автомобилей: <strong>618</strong><br>Плотность парковки: <strong>3090 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k36a*/DG.polygon([[55.61946, 51.797591], [55.622181, 51.801676], [55.621826, 51.802457], [55.621368, 51.803525], [55.620098, 51.806132], [55.619801, 51.806456], [55.619416, 51.806681], [55.619259, 51.806683], [55.61912, 51.806496], [55.618678, 51.803596], [55.618635, 51.803414], [55.618172, 51.802041], [55.617866, 51.800579], [55.618041, 51.800431]], {className: 'polygon', fillColor: '#46a700'}).addTo(map).bindPopup('<h2>Квартал 36А</h2><br>Количество автомобилей: <strong>140</strong><br>Плотность парковки: <strong>2800 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*37*/DG.polygon([[55.621468, 51.790395], [55.621697, 51.790695], [55.624512, 51.794982], [55.62472, 51.795407], [55.62505, 51.795908], [55.623109, 51.799907], [55.622615, 51.800713], [55.622199, 51.801541], [55.618672, 51.796144]], {className: 'polygon', fillColor: '#5b9400'}).addTo(map).bindPopup('<h2>37-й микрорайон</h2><br>Количество автомобилей: <strong>855</strong><br>Плотность парковки: <strong>3563 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*36*/DG.polygon([[55.616204, 51.782349], [55.619656, 51.787591], [55.619879, 51.787977], [55.620432, 51.788812], [55.620449, 51.789016], [55.620421, 51.789241], [55.618953, 51.792283], [55.618829, 51.792756], [55.615833, 51.790088], [55.615711, 51.789899], [55.615615, 51.789417], [55.615641, 51.788276], [55.615613, 51.787743], [55.615255, 51.784938], [55.61524, 51.784633], [55.615383, 51.784043]], {className: 'polygon', fillColor: '#6c8500'}).addTo(map).bindPopup('<h2>36-й микрорайон</h2><br>Количество автомобилей: <strong>870</strong><br>Плотность парковки: <strong>4143 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*35a*/DG.polygon([[55.622775, 51.784505], [55.620781, 51.788501], [55.616301, 51.781679], [55.618223, 51.777694], [55.618313, 51.777642], [55.618412, 51.777705], [55.622747, 51.784269], [55.622786, 51.784387]], {className: 'polygon', fillColor: '#965f00'}).addTo(map).bindPopup('<h2>Микрорайон 35А</h2><br>Количество автомобилей: <strong>787</strong><br>Плотность парковки: <strong>5621 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*35*/DG.polygon([[55.627826, 51.789531], [55.627751, 51.790403], [55.625312, 51.79537], [55.620831, 51.788573], [55.623629, 51.783113]], {className: 'polygon', fillColor: '#a55100'}).addTo(map).bindPopup('<h2>35-й микрорайон</h2><br>Количество автомобилей: <strong>1790</strong><br>Плотность парковки: <strong>6172 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*34*/DG.polygon([[55.631018, 51.783834], [55.628449, 51.789143], [55.628147, 51.789443], [55.627817, 51.789278], [55.623733, 51.783075], [55.623694, 51.782901], [55.623741, 51.782708], [55.626465, 51.777119], [55.626607, 51.777146]], {className: 'polygon', fillColor: '#a35300'}).addTo(map).bindPopup('<h2>34-й микрорайон</h2><br>Количество автомобилей: <strong>2013</strong><br>Плотность парковки: <strong>6100 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*ke*/DG.polygon([[55.623042, 51.808553], [55.623161, 51.812534], [55.623254, 51.812891], [55.623527, 51.813233], [55.623659, 51.817749], [55.622127, 51.817893], [55.620396, 51.816843], [55.619382, 51.809202], [55.619454, 51.808495], [55.619623, 51.808282], [55.620821, 51.807763], [55.62087, 51.807798], [55.621, 51.808752]], {className: 'polygon', fillColor: '#509e00'}).addTo(map).bindPopup('<h2>Квартал Е</h2><br>Количество автомобилей: <strong>820</strong><br>Плотность парковки: <strong>3154 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k1*/DG.polygon([[55.626403, 51.811448], [55.626581, 51.817457], [55.623723, 51.817748], [55.623592, 51.813337], [55.623645, 51.813124]], {className: 'polygon', fillColor: '#2dbd00'}).addTo(map).bindPopup('<h2>1-й квартал</h2><br>Количество автомобилей: <strong>214</strong><br>Плотность парковки: <strong>1945 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k2*/DG.polygon([[55.626442, 51.811424], [55.626617, 51.817456], [55.629434, 51.817194], [55.629572, 51.817068], [55.631204, 51.813694], [55.62966, 51.811328], [55.629142, 51.810652], [55.627338, 51.809038], [55.626652, 51.811295]], {className: 'polygon', fillColor: '#678900'}).addTo(map).bindPopup('<h2>2-й квартал</h2><br>Количество автомобилей: <strong>755</strong><br>Плотность парковки: <strong>3974 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*kb*/DG.polygon([[55.629678, 51.817674], [55.629823, 51.818019], [55.63043, 51.818908], [55.629008, 51.819029], [55.629045, 51.820422], [55.625316, 51.820744], [55.625245, 51.818194], [55.62941, 51.817781]], {className: 'polygon', fillColor: '#00e600'}).addTo(map).bindPopup('<h2>Квартал Б</h2><br>Количество автомобилей: <strong>201</strong><br>Плотность парковки: <strong>335 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k3*/DG.polygon([[55.633354, 51.809002], [55.633379, 51.809131], [55.633338, 51.809325], [55.631265, 51.813539], [55.629591, 51.81102], [55.629346, 51.810691], [55.628933, 51.81026], [55.627421, 51.808891], [55.629703, 51.804084], [55.629905, 51.803752]], {className: 'polygon', fillColor: '#4ea000'}).addTo(map).bindPopup('<h2>3-й квартал</h2><br>Количество автомобилей: <strong>619</strong><br>Плотность парковки: <strong>3095 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k5*/DG.polygon([[55.624895, 51.805874], [55.62406, 51.807586], [55.623908, 51.807736], [55.623423, 51.807808], [55.623162, 51.807977], [55.623041, 51.808469], [55.621028, 51.808674], [55.620892, 51.807656], [55.619647, 51.80819], [55.619635, 51.808059], [55.619705, 51.807985], [55.622513, 51.802254]], {className: 'polygon', fillColor: '#579700'}).addTo(map).bindPopup('<h2>5-й квартал</h2><br>Количество автомобилей: <strong>376</strong><br>Плотность парковки: <strong>3418 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*k6*/DG.polygon([[55.625251, 51.796638], [55.627043, 51.799354], [55.629224, 51.802695], [55.626552, 51.808153], [55.622574, 51.80212]], {className: 'polygon', fillColor: '#519d00'}).addTo(map).bindPopup('<h2>6-й квартал</h2><br>Количество автомобилей: <strong>901</strong><br>Плотность парковки: <strong>3218 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*ksuz*/DG.polygon([[55.632148, 51.79639], [55.629499, 51.801809], [55.625449, 51.795638], [55.627863, 51.790666], [55.628116, 51.790509], [55.628375, 51.790645]], {className: 'polygon', fillColor: '#27c200'}).addTo(map).bindPopup('<h2>Квартал СУЗ</h2><br>Количество автомобилей: <strong>435</strong><br>Плотность парковки: <strong>1740 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*kso*/DG.polygon([[55.632196, 51.796464], [55.636601, 51.803185], [55.633993, 51.808572], [55.63383, 51.808381], [55.631094, 51.804164], [55.629546, 51.801887]], {className: 'polygon', fillColor: '#1ace00'}).addTo(map).bindPopup('<h2>Квартал СО</h2><br>Количество автомобилей: <strong>359</strong><br>Плотность парковки: <strong>1282 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*45*/DG.polygon([[55.631085, 51.783975], [55.632885, 51.786685], [55.632822, 51.786819], [55.635089, 51.790282], [55.632241, 51.796073], [55.628532, 51.790444], [55.62838, 51.789993], [55.628426, 51.789487], [55.628577, 51.789032]], {className: 'polygon', fillColor: '#658b00'}).addTo(map).bindPopup('<h2>45-й микрорайон</h2><br>Количество автомобилей: <strong>1097</strong><br>Плотность парковки: <strong>3918 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*44*/DG.polygon([[55.639588, 51.796984], [55.639564, 51.797154], [55.636735, 51.802945], [55.632358, 51.796239], [55.635256, 51.790301], [55.636274, 51.791845], [55.636218, 51.791972], [55.638867, 51.796024], [55.639213, 51.796329], [55.639345, 51.796535], [55.639518, 51.796771]], {className: 'polygon', fillColor: '#946100'}).addTo(map).bindPopup('<h2>44-й микрорайон</h2><br>Количество автомобилей: <strong>1722</strong><br>Плотность парковки: <strong>5555 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*49*/DG.polygon([[55.637985, 51.784216], [55.635337, 51.789807], [55.631232, 51.783597], [55.63394, 51.778052]], {className: 'polygon', fillColor: '#a35300'}).addTo(map).bindPopup('<h2>49-й микрорайон</h2><br>Количество автомобилей: <strong>1281</strong><br>Плотность парковки: <strong>6100 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*47*/DG.polygon([[55.638134, 51.784445], [55.642508, 51.791035], [55.639823, 51.796516], [55.635441, 51.789903]], {className: 'polygon', fillColor: '#ff0000'}).addTo(map).bindPopup('<h2>47-й микрорайон</h2><br>Количество автомобилей: <strong>1396</strong><br>Плотность парковки: <strong>9307 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*30*/DG.polygon([[55.643644, 51.8031], [55.639421, 51.811819], [55.638021, 51.814734], [55.636641, 51.812602], [55.636849, 51.812163], [55.636168, 51.811121], [55.636139, 51.810919], [55.635565, 51.810041], [55.635595, 51.809969], [55.634682, 51.808576], [55.634641, 51.807932], [55.634729, 51.807582], [55.636995, 51.80296], [55.637115, 51.802741], [55.639625, 51.797588], [55.639731, 51.797474], [55.639904, 51.797531], [55.640293, 51.798114], [55.640741, 51.798664]], {className: 'polygon', fillColor: '#678900'}).addTo(map).bindPopup('<h2>30-й микрорайон</h2><br>Количество автомобилей: <strong>2116</strong><br>Плотность парковки: <strong>3992 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*31*/DG.polygon([[55.643873, 51.802731], [55.645138, 51.800148], [55.644543, 51.799224], [55.645726, 51.796775], [55.642568, 51.79195], [55.640141, 51.796933], [55.640349, 51.797218], [55.640838, 51.798111]], {className: 'polygon', fillColor: '#678900'}).addTo(map).bindPopup('<h2>31-й микрорайон</h2><br>Количество автомобилей: <strong>998</strong><br>Плотность парковки: <strong>3992 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*25*/DG.polygon([[55.644111, 51.81413], [55.645835, 51.810576], [55.646102, 51.810242], [55.647287, 51.807729], [55.647147, 51.807537], [55.644363, 51.804147], [55.643779, 51.803266], [55.640873, 51.809194]], {className: 'polygon', fillColor: '#6b8600'}).addTo(map).bindPopup('<h2>25-й микрорайон</h2><br>Количество автомобилей: <strong>988</strong><br>Плотность парковки: <strong>4117 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*24*/DG.polygon([[55.646343, 51.817519], [55.649505, 51.811115], [55.647317, 51.807776], [55.646151, 51.810295], [55.645879, 51.810652], [55.644149, 51.814187]], {className: 'polygon', fillColor: '#5c9300'}).addTo(map).bindPopup('<h2>24-й микрорайон</h2><br>Количество автомобилей: <strong>610</strong><br>Плотность парковки: <strong>3588 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*23*/DG.polygon([[55.648736, 51.821156], [55.649246, 51.820154], [55.649262, 51.819585], [55.651685, 51.814667], [55.649537, 51.811175], [55.646385, 51.817586]], {className: 'polygon', fillColor: '#599600'}).addTo(map).bindPopup('<h2>23-й микрорайон</h2><br>Количество автомобилей: <strong>590</strong><br>Плотность парковки: <strong>3471 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*22*/DG.polygon([[55.653493, 51.819895], [55.65112, 51.824765], [55.648767, 51.821203], [55.64932, 51.820194], [55.64933, 51.81965], [55.651725, 51.814737], [55.653454, 51.817548], [55.653598, 51.818195]], {className: 'polygon', fillColor: '#5a9500'}).addTo(map).bindPopup('<h2>22-й микрорайон</h2><br>Количество автомобилей: <strong>632</strong><br>Плотность парковки: <strong>3511 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*19*/DG.polygon([[55.657147, 51.819087], [55.656989, 51.822336], [55.653863, 51.828898], [55.651318, 51.825049], [55.653905, 51.819688], [55.654137, 51.819306], [55.655648, 51.818094], [55.656756, 51.818258], [55.65705, 51.818474]], {className: 'polygon', fillColor: '#2dbe00'}).addTo(map).bindPopup('<h2>19-й микрорайон</h2><br>Количество автомобилей: <strong>464</strong><br>Плотность парковки: <strong>1933 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*28*/DG.polygon([[55.650785, 51.802279], [55.647962, 51.808069], [55.647298, 51.807099], [55.644619, 51.803827], [55.64399, 51.802837], [55.646181, 51.798317], [55.646781, 51.797732], [55.647595, 51.797727]], {className: 'polygon', fillColor: '#846f00'}).addTo(map).bindPopup('<h2>28-й микрорайон</h2><br>Количество автомобилей: <strong>1346</strong><br>Плотность парковки: <strong>4985 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*27*/DG.polygon([[55.655899, 51.817892], [55.656761, 51.818043], [55.657093, 51.817818], [55.657188, 51.817543], [55.657571, 51.80915], [55.657571, 51.80915], [55.657528, 51.808929], [55.656788, 51.80745], [55.656625, 51.807306], [55.653744, 51.806734], [55.650895, 51.802458], [55.648075, 51.808247], [55.649839, 51.810954], [55.653354, 51.81661], [55.653951, 51.815296], [55.653651, 51.814797], [55.653813, 51.814454], [55.653694, 51.81426], [55.653985, 51.813678], [55.654025, 51.813736], [55.654047, 51.813694], [55.654109, 51.813783], [55.654198, 51.813596], [55.654169, 51.813541], [55.654465, 51.812912], [55.654317, 51.812697], [55.654131, 51.812146], [55.654515, 51.81134], [55.654582, 51.809855], [55.655049, 51.808903], [55.655834, 51.809008], [55.655965, 51.80933], [55.65537, 51.810403], [55.655208, 51.813541], [55.655303, 51.813651], [55.655709, 51.813681], [55.655512, 51.815966], [55.655971, 51.816012]], {className: 'polygon', fillColor: '#896a00'}).addTo(map).bindPopup('<h2>27-й микрорайон</h2><br>Количество автомобилей: <strong>1862</strong><br>Плотность парковки: <strong>3267 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*29a*/DG.polygon([[55.649921, 51.794984], [55.650482, 51.795837], [55.650911, 51.79909], [55.651731, 51.800364], [55.650888, 51.802079], [55.64824, 51.798088], [55.649759, 51.794975], [55.649844, 51.794921]], {className: 'polygon', fillColor: '#ef0f00'}).addTo(map).bindPopup('<h2>Микрорайон 29А</h2><br>Количество автомобилей: <strong>700</strong><br>Плотность парковки: <strong>8750 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*29b*/DG.polygon([[55.658162, 51.802084], [55.658008, 51.802572], [55.657958, 51.803172], [55.657903, 51.804355], [55.657788, 51.806938], [55.657747, 51.807126], [55.657606, 51.807256], [55.656248, 51.807023], [55.6538, 51.806512], [55.650999, 51.802245], [55.652632, 51.798865], [55.654327, 51.801373], [55.654975, 51.800182], [55.656583, 51.800413], [55.65816, 51.802087]], {className: 'polygon', fillColor: '#f50900'}).addTo(map).bindPopup('<h2>Микрорайон 29Б</h2><br>Количество автомобилей: <strong>1794</strong><br>Плотность парковки: <strong>8970 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*9*/DG.polygon([[55.644678, 51.840629], [55.644243, 51.842263], [55.642603, 51.847662], [55.640991, 51.845812], [55.639247, 51.84339], [55.638166, 51.841746], [55.638614, 51.838855], [55.638671, 51.838311], [55.638738, 51.83708], [55.638764, 51.835197], [55.643812, 51.839385], [55.644072, 51.839719], [55.644457, 51.840442]], {className: 'polygon', fillColor: '#5d9200'}).addTo(map).bindPopup('<h2>9-й микрорайон</h2><br>Количество автомобилей: <strong>1092</strong><br>Плотность парковки: <strong>3640 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*6*/DG.polygon([[55.641037, 51.821888], [55.640963, 51.822027], [55.64053, 51.823074], [55.639697, 51.824598], [55.63909, 51.826891], [55.638924, 51.82701], [55.638206, 51.828021], [55.638471, 51.828521], [55.638078, 51.829276], [55.637566, 51.829928], [55.637422, 51.829547], [55.637155, 51.82897], [55.636871, 51.828421], [55.637175, 51.827226], [55.637187, 51.827051], [55.637156, 51.826901], [55.636939, 51.826248], [55.636912, 51.826045], [55.639011, 51.818091]], {className: 'polygon', fillColor: '#638d00'}).addTo(map).bindPopup('<h2>6-й микрорайон</h2><br>Количество автомобилей: <strong>576</strong><br>Плотность парковки: <strong>3840 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*7*/DG.polygon([[55.639442, 51.835487], [55.63985, 51.833936], [55.639938, 51.833984], [55.640064, 51.833508], [55.640137, 51.833411], [55.640358, 51.832579], [55.64061, 51.832436], [55.640958, 51.831138], [55.641729, 51.829255], [55.642824, 51.825213], [55.641063, 51.821933], [55.640983, 51.822073], [55.640816, 51.822475], [55.640554, 51.823122], [55.639737, 51.824635], [55.639131, 51.826931], [55.638955, 51.827065], [55.638281, 51.828034], [55.638534, 51.828522], [55.638116, 51.829323], [55.637593, 51.83], [55.638113, 51.83148], [55.638461, 51.832878], [55.638699, 51.834837]], {className: 'polygon', fillColor: '#2bbf00'}).addTo(map).bindPopup('<h2>7-й микрорайон</h2><br>Количество автомобилей: <strong>468</strong><br>Плотность парковки: <strong>1872 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*8*/DG.polygon([[55.64483, 51.840006], [55.639495, 51.835532], [55.639889, 51.834054], [55.639958, 51.834095], [55.640107, 51.833564], [55.640179, 51.833447], [55.640406, 51.832627], [55.640652, 51.832483], [55.641018, 51.831182], [55.641784, 51.829289], [55.642863, 51.825285], [55.646249, 51.831589], [55.646507, 51.832299], [55.646579, 51.833047], [55.646535, 51.833579]], {className: 'polygon', fillColor: '#42ab00'}).addTo(map).bindPopup('<h2>8-й микрорайон</h2><br>Количество автомобилей: <strong>986</strong><br>Плотность парковки: <strong>2665 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*10*/DG.polygon([[55.645244, 51.841094], [55.646699, 51.842302], [55.646881, 51.8425], [55.647114, 51.842796], [55.64733, 51.843213], [55.647448, 51.843585], [55.648106, 51.846245], [55.648262, 51.846683], [55.648569, 51.847053], [55.64925, 51.847614], [55.649051, 51.848373], [55.648986, 51.848497], [55.648748, 51.848661], [55.648606, 51.848868], [55.648293, 51.849978], [55.648247, 51.850297], [55.648208, 51.85219], [55.648178, 51.852475], [55.647767, 51.854035], [55.647678, 51.854234], [55.647538, 51.854359], [55.646321, 51.854396], [55.646152, 51.854328], [55.643256, 51.852049], [55.643132, 51.851899], [55.642626, 51.850911], [55.642274, 51.850461], [55.645058, 51.840953]], {className: 'polygon', fillColor: '#4ca100'}).addTo(map).bindPopup('<h2>10-й микрорайон</h2><br>Количество автомобилей: <strong>1154</strong><br>Плотность парковки: <strong>3037 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*11*/DG.polygon([[55.648134, 51.833464], [55.64842, 51.833689], [55.648704, 51.834298], [55.652016, 51.837068], [55.649289, 51.847344], [55.648547, 51.846817], [55.648206, 51.846139], [55.647424, 51.843066], [55.64719, 51.842606], [55.646011, 51.840992], [55.645241, 51.840348], [55.646755, 51.834647], [55.647123, 51.833958], [55.647477, 51.833637], [55.647982, 51.83343]], {className: 'polygon', fillColor: '#6f8100'}).addTo(map).bindPopup('<h2>11-й микрорайон</h2><br>Количество автомобилей: <strong>1539</strong><br>Плотность парковки: <strong>4275 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*14a*/DG.polygon([[55.649304, 51.847681], [55.65209, 51.849985], [55.65183, 51.850955], [55.651714, 51.851282], [55.651563, 51.851531], [55.651082, 51.852028], [55.649827, 51.854155], [55.649752, 51.85442], [55.649741, 51.854738], [55.649706, 51.854723], [55.648299, 51.854826], [55.647692, 51.854329], [55.647816, 51.854075], [55.648255, 51.852347], [55.648317, 51.850188], [55.648663, 51.848939], [55.648779, 51.848764], [55.649014, 51.848595], [55.649104, 51.848432]], {className: 'polygon', fillColor: '#5f9000'}).addTo(map).bindPopup('<h2>Микрорайон 14А</h2><br>Количество автомобилей: <strong>74</strong><br>Плотность парковки: <strong>3700 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*14*/DG.polygon([[55.652149, 51.850035], [55.65354, 51.851188], [55.65399, 51.851301], [55.654151, 51.851237], [55.654732, 51.850813], [55.655103, 51.850599], [55.65546, 51.850554], [55.655801, 51.850698], [55.655731, 51.851412], [55.655698, 51.852201], [55.655535, 51.856295], [55.655508, 51.856536], [55.655415, 51.85685], [55.655098, 51.857479], [55.654798, 51.857766], [55.65466, 51.857793], [55.653993, 51.857613], [55.652657, 51.857711], [55.652335, 51.857578], [55.651572, 51.856943], [55.649995, 51.855169], [55.649818, 51.854765], [55.649803, 51.854446], [55.649876, 51.854222], [55.651104, 51.852138], [55.651611, 51.851621], [55.651764, 51.851353], [55.651886, 51.850998]], {className: 'polygon', fillColor: '#628e00'}).addTo(map).bindPopup('<h2>14-й микрорайон</h2><br>Количество автомобилей: <strong>837</strong><br>Плотность парковки: <strong>3805 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*13*/DG.polygon([[55.650684, 51.842654], [55.653641, 51.845095], [55.655051, 51.844898], [55.657276, 51.846739], [55.656901, 51.84771], [55.656132, 51.84945], [55.655863, 51.850235], [55.655796, 51.850423], [55.655743, 51.850464], [55.655385, 51.850318], [55.655013, 51.850398], [55.653978, 51.851063], [55.653584, 51.850964], [55.649407, 51.847488]], {className: 'polygon', fillColor: '#549b00'}).addTo(map).bindPopup('<h2>13-й микрорайон</h2><br>Количество автомобилей: <strong>824</strong><br>Плотность парковки: <strong>3296 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*12*/DG.polygon([[55.652223, 51.837214], [55.653113, 51.83798], [55.657292, 51.841449], [55.65774, 51.841995], [55.657981, 51.842372], [55.658024, 51.842576], [55.657992, 51.843903], [55.658035, 51.844144], [55.658136, 51.844324], [55.658424, 51.844646], [55.657563, 51.846415], [55.657445, 51.846757], [55.655075, 51.844782], [55.653661, 51.844982], [55.650713, 51.842551], [55.652126, 51.837231]], {className: 'polygon', fillColor: '#4e9f00'}).addTo(map).bindPopup('<h2>12-й микрорайон</h2><br>Количество автомобилей: <strong>870</strong><br>Плотность парковки: <strong>3107 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*21*/DG.polygon([[55.653774, 51.829307], [55.660649, 51.839769], [55.66069, 51.839905], [55.660663, 51.840105], [55.660391, 51.840682], [55.660186, 51.841022], [55.659589, 51.842208], [55.659299, 51.842865], [55.659299, 51.842865], [55.659109, 51.843009], [55.658895, 51.842845], [55.657651, 51.840966], [55.652315, 51.836528], [55.652684, 51.835074], [55.653013, 51.833304], [55.65326, 51.831268], [55.653466, 51.830191]], {className: 'polygon', fillColor: '#618e00'}).addTo(map).bindPopup('<h2>21-й микрорайон</h2><br>Количество автомобилей: <strong>1209</strong><br>Плотность парковки: <strong>3778 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*15*/DG.polygon([[55.653708, 51.829227], [55.653613, 51.829469], [55.653489, 51.829799], [55.653388, 51.830112], [55.653301, 51.830479], [55.653222, 51.830945], [55.653148, 51.831448], [55.652924, 51.83325], [55.652599, 51.835001], [55.652222, 51.836437], [55.64798, 51.832908], [55.647856, 51.832515], [55.647951, 51.831902], [55.651173, 51.825307], [55.653096, 51.828217], [55.653269, 51.828561]], {className: 'polygon', fillColor: '#e91400'}).addTo(map).bindPopup('<h2>15-й микрорайон</h2><br>Количество автомобилей: <strong>513</strong><br>Плотность парковки: <strong>8550 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*17*/DG.polygon([[55.66143, 51.829155], [55.661222, 51.829606], [55.660995, 51.829685], [55.660083, 51.831403], [55.65975, 51.833523], [55.658581, 51.836112], [55.653949, 51.829068], [55.657089, 51.822487]], {className: 'polygon', fillColor: '#4ea000'}).addTo(map).bindPopup('<h2>17-й микрорайон</h2><br>Количество автомобилей: <strong>1084</strong><br>Плотность парковки: <strong>3097 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*18*/DG.polygon([[55.664019, 51.833096], [55.660979, 51.839406], [55.66087, 51.839472], [55.660778, 51.839445], [55.658615, 51.836159], [55.659798, 51.833611], [55.660161, 51.831415], [55.66103, 51.829757], [55.661209, 51.829746], [55.661478, 51.829223]], {className: 'polygon', fillColor: '#618f00'}).addTo(map).bindPopup('<h2>18-й микрорайон</h2><br>Количество автомобилей: <strong>750</strong><br>Плотность парковки: <strong>3750 авто/км<sup>2</sup></strong>', {closeButton: false});
    /*20*/DG.polygon([[55.657926, 51.818452], [55.667958, 51.819876], [55.667018, 51.822284], [55.666723, 51.823153], [55.666279, 51.825034], [55.666012, 51.826434], [55.665697, 51.828627], [55.665483, 51.829729], [55.664978, 51.831197], [55.664118, 51.832905], [55.657128, 51.822307], [55.657241, 51.819176], [55.657404, 51.818542]], {fillColor: '#48a600', className: 'polygon'}).addTo(map).bindPopup('<h2>20-й микрорайон</h2><br>Количество автомобилей: <strong>1721</strong><br>Плотность парковки: <strong>2868 авто/км<sup>2</sup></strong>', {closeButton: false});
    
    
    /*garages*/DG.polygon([[[55.664399, 51.819763], [55.664365, 51.820502], [55.665111, 51.82164], [55.665863, 51.821743], [55.665942, 51.819975]], [[55.655103, 51.857609], [55.655214, 51.858059], [55.655419, 51.85924], [55.655611, 51.859759], [55.652923, 51.859802], [55.651748, 51.85936], [55.651474, 51.860419], [55.650732, 51.859827], [55.650868, 51.859303], [55.650061, 51.858643], [55.65039, 51.857378], [55.651078, 51.857797], [55.651313, 51.856797], [55.65154, 51.857049], [55.652305, 51.857681], [55.652644, 51.857819], [55.653967, 51.857732], [55.654656, 51.857905], [55.654821, 51.857872]], [[55.646834, 51.854491], [55.646843, 51.855489], [55.646639, 51.856129], [55.646026, 51.856145], [55.643133, 51.853824], [55.643512, 51.852342], [55.646128, 51.85443], [55.646326, 51.854507]], [[55.646974, 51.855087], [55.648391, 51.856297], [55.648476, 51.85643], [55.647685, 51.859743], [55.64683, 51.859107], [55.646772, 51.859342], [55.645483, 51.85834], [55.645951, 51.856862], [55.646297, 51.857199]], [[55.642755, 51.847988], [55.641735, 51.851536], [55.641174, 51.850868], [55.640948, 51.850589], [55.640784, 51.85028], [55.638514, 51.844627], [55.638263, 51.84373], [55.63811, 51.842555], [55.638144, 51.841912], [55.640936, 51.845879]], [[55.636624, 51.840274], [55.638018, 51.841817], [55.637978, 51.842545], [55.638118, 51.843692], [55.638337, 51.84457], [55.63929, 51.846991], [55.638779, 51.847638], [55.638147, 51.846722], [55.637855, 51.846399], [55.637636, 51.846178], [55.637453, 51.845795], [55.63719, 51.844822], [55.63693, 51.844241], [55.636548, 51.843201], [55.637007, 51.841909], [55.636313, 51.841138]], [[55.628976, 51.831586], [55.629002, 51.832269], [55.629778, 51.832183], [55.629852, 51.834459], [55.629213, 51.834431], [55.628979, 51.834395], [55.628318, 51.834077], [55.62786, 51.833049], [55.627991, 51.831699]], [[55.627193, 51.821607], [55.627245, 51.823263], [55.62746, 51.824527], [55.627531, 51.826029], [55.62727, 51.827051], [55.625075, 51.825075], [55.624964, 51.821221]], [[55.614891, 51.794767], [55.615774, 51.800577], [55.615115, 51.800889], [55.615714, 51.802726], [55.615968, 51.804284], [55.615345, 51.807442], [55.616306, 51.811336], [55.616855, 51.811294], [55.616951, 51.811452], [55.617223, 51.813185], [55.616816, 51.813424], [55.616256, 51.814543], [55.615016, 51.812602], [55.615024, 51.812127], [55.615131, 51.810874], [55.615092, 51.810619], [55.61458, 51.809583], [55.613022, 51.807887], [55.61179, 51.808467], [55.612287, 51.809889], [55.611523, 51.811131], [55.611222, 51.810409], [55.610611, 51.810931], [55.610528, 51.811944], [55.610493, 51.812926], [55.610307, 51.813756], [55.610123, 51.814349], [55.608573, 51.812832], [55.609161, 51.81065], [55.609173, 51.808897], [55.60838, 51.808128], [55.608725, 51.807047], [55.608391, 51.806716], [55.608739, 51.805604], [55.608948, 51.805811], [55.609229, 51.804927], [55.60916, 51.804589], [55.608712, 51.803988], [55.608292, 51.803609], [55.607905, 51.803111], [55.607627, 51.802626], [55.60743, 51.802542], [55.608085, 51.800495], [55.608441, 51.800686], [55.608902, 51.800359], [55.609099, 51.80013], [55.609626, 51.799305], [55.610444, 51.79785], [55.611551, 51.796659], [55.6125, 51.799542], [55.612563, 51.800066], [55.613037, 51.80141], [55.613665, 51.800761], [55.613233, 51.79784], [55.613557, 51.797685], [55.613247, 51.795565]], [[55.612708, 51.788809], [55.612974, 51.788785], [55.613124, 51.78894], [55.613263, 51.789189], [55.615208, 51.79316], [55.615281, 51.793405], [55.615269, 51.793579], [55.615188, 51.793678], [55.614755, 51.793884], [55.614501, 51.79405], [55.613131, 51.794627], [55.613179, 51.795403], [55.613131, 51.795578], [55.611841, 51.796234], [55.611526, 51.796545], [55.61035, 51.797832], [55.609575, 51.799236], [55.608956, 51.800173], [55.608579, 51.799406], [55.608274, 51.798424], [55.608194, 51.797573], [55.611762, 51.792032], [55.61191, 51.791963], [55.612328, 51.791234], [55.612898, 51.78989]], [[55.615512, 51.793549], [55.615806, 51.794078], [55.616221, 51.79575], [55.616404, 51.796264], [55.61522, 51.796814], [55.614873, 51.794491], [55.613233, 51.795258], [55.613204, 51.794896], [55.613298, 51.794654], [55.614542, 51.794147], [55.614774, 51.793991], [55.615267, 51.793763]], [[55.635404, 51.797731], [55.636204, 51.798933], [55.636402, 51.798531], [55.636813, 51.799162], [55.635729, 51.801393], [55.634523, 51.799559]], [[55.653043, 51.817524], [55.653396, 51.81806], [55.653068, 51.818734], [55.652713, 51.818196]], [[55.660622, 51.81332], [55.661744, 51.813371], [55.662414, 51.81501], [55.660537, 51.815128]], [[55.657966, 51.806221], [55.658715, 51.806331], [55.658667, 51.807469], [55.658018, 51.807365]], [[55.619773, 51.799128], [55.620981, 51.801036], [55.619527, 51.80417], [55.618365, 51.802017]], [[55.636395, 51.831294], [55.637073, 51.832277], [55.637275, 51.833062], [55.636068, 51.837313], [55.635939, 51.837248], [55.635215, 51.839361], [55.634568, 51.838677], [55.635084, 51.835224]], [[55.617583, 51.799746], [55.618002, 51.801671], [55.616261, 51.802471], [55.615947, 51.800508]]], {className: 'polygon', fillColor: '#ffeb0f'}).addTo(map).bindPopup('<h2>Гаражный кооператив</h2><br>Общая вместимоcть гаражного комплекса города: <strong>30000</strong><br>Загруженность сегодня: <strong>70%</strong>', {closeButton: false});
  
  
    /*parking*/DG.polygon([[[55.667028, 51.822832], [55.667435, 51.823114], [55.666362, 51.827942], [55.666009, 51.827734], [55.666372, 51.825577]], [[55.665208, 51.8313], [55.66558, 51.831707], [55.664962, 51.833954], [55.66437, 51.833038]], [[55.656173, 51.852047], [55.656853, 51.852876], [55.656943, 51.853087], [55.656972, 51.853442], [55.656916, 51.853797], [55.656662, 51.854255], [55.656115, 51.853271], [55.6561, 51.854344], [55.655731, 51.854237], [55.655807, 51.851969]], [[55.651177, 51.856897], [55.651039, 51.857513], [55.649389, 51.856201], [55.649498, 51.855782], [55.649043, 51.855418], [55.649096, 51.855188], [55.649489, 51.85504]], [[55.640859, 51.851283], [55.641436, 51.851928], [55.641012, 51.853174], [55.64073, 51.852834], [55.640563, 51.851738]], [[55.639738, 51.848369], [55.64084, 51.85107], [55.640614, 51.851496], [55.640143, 51.850732], [55.639592, 51.848552]], [[55.637455, 51.830555], [55.638271, 51.833448], [55.63757, 51.834072], [55.636958, 51.831462]], [[55.613887, 51.78129], [55.61448, 51.78207], [55.614713, 51.78351], [55.614272, 51.784551], [55.613131, 51.783049]], [[55.61716, 51.776888], [55.617557, 51.777493], [55.616614, 51.779443], [55.616221, 51.778838]], [[55.62373, 51.781452], [55.623949, 51.781773], [55.623409, 51.782899], [55.623181, 51.782586]], [[55.648919, 51.793874], [55.649148, 51.794218], [55.648742, 51.795058], [55.649181, 51.795727], [55.648456, 51.797207], [55.648111, 51.796679], [55.648356, 51.796165], [55.647839, 51.795365], [55.648342, 51.79433], [55.648544, 51.794634]], [[55.651804, 51.80018], [55.65246, 51.798836], [55.651918, 51.797846], [55.651233, 51.799302]], [[55.658104, 51.803082], [55.658553, 51.803141], [55.658484, 51.804748], [55.658033, 51.804676]], [[55.655667, 51.813863], [55.65548, 51.816006], [55.657097, 51.816193], [55.657189, 51.814084]], [[55.662321, 51.835366], [55.662547, 51.835723], [55.662084, 51.836679], [55.66185, 51.836334]], [[55.641227, 51.814028], [55.64226, 51.815601], [55.642726, 51.814632], [55.641713, 51.813089]]], {className: 'polygon', fillColor: '#9bd8f7'}).addTo(map).bindPopup('<h2>Стоянка</h2><br>Общая вместимость стоянок города: <strong>11000</strong><br>Загруженность сегодня: <strong>50%</strong>', {closeButton: false});
});
