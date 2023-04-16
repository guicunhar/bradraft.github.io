const vazio = { 'id': '', 'nome': '', 'over': 00, 'pos': '', 'idpos': 99, 'tipo': 'azul', 'time': ''};
const jogTime = [vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio];
window.numTime = {'tec': 0,'gol': 0, 'ld': 0, 'le': 0, 'zag': 0, 'vol': 0, 'mei': 0, 'pon': 0, 'ata': 0, 'total': 0};
var cont = 5;

window.nomes = [
    { 'id': 'neymar_2011', 'nome': 'NEYMAR 2011', 'over': 99, 'pos': 'PON', 'idpos': 2, 'tipo': 'LENDA', 'time': 'santos'}
    ,{ 'id': 'rogerio_ceni_2005', 'nome': 'CENI 2005', 'over': 98, 'pos': 'GOL', 'idpos': 8, 'tipo': 'LENDA', 'time': 'sao_paulo'}
    ,{ 'id': 'ronaldinho_2013', 'nome': 'RONALDINHO 2013', 'over': 97, 'pos': 'MEI', 'idpos': 3, 'tipo': 'REI DA AMÉRICA', 'time': 'atletico_mg'}
    ,{ 'id': 'fred_2012', 'nome': 'FRED', 'over': 96, 'pos': 'ATA', 'idpos': 1, 'tipo': 'LENDA', 'time': 'fluminense'}
    ,{ 'id': 'conca_2010', 'nome': 'CONCA 2010', 'over': 95, 'pos': 'MEI', 'idpos': 3, 'tipo': 'LENDA', 'time': 'fluminense'}
    ,{ 'id': 'cassio_2012', 'nome': 'CASSIO 2012', 'over': 95, 'pos': 'GOL', 'idpos': 8, 'tipo': 'LENDA', 'time': 'corinthians'}
    ,{ 'id': 'everton_ribeiro_2014', 'nome': 'E. RIBEIRO 2014', 'over': 94, 'pos': 'MEI', 'idpos': 3, 'tipo': 'LENDA', 'time': 'cruzeiro'}
    ,{ 'id': 'geromel_2017', 'nome': 'GEROMEL 2017', 'over': 92, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'LENDA', 'time': 'gremio'}
    ,{ 'id': 'hernanes_2008', 'nome': 'HERNANES 2008', 'over': 92, 'pos': 'VOL', 'idpos': 4, 'tipo': 'LENDA', 'time': 'sao_paulo'}
    ,{ 'id': 'gustavo_gomez', 'nome': 'GUSTAVO GOMEZ', 'over': 89, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'abel_ferreira', 'nome': 'ABEL FERREIRA', 'over': 89, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'arrascaeta', 'nome': 'ARRASCAETA', 'over': 89, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'cano', 'nome': 'CANO', 'over': 89, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'suarez', 'nome': 'SUÁREZ', 'over': 89, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'gremio'}
    ,{ 'id': 'andre', 'nome': 'ANDRE', 'over': 88, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'dudu', 'nome': 'DUDU', 'over': 88, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'raphael_veiga', 'nome': 'RAPHAEL VEIGA', 'over': 88, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'arana', 'nome': 'ARANA', 'over': 88, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'marcelo', 'nome': 'MARCELO', 'over': 88, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'weverton', 'nome': 'WEVERTON', 'over': 88, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'hulk', 'nome': 'HULK', 'over': 88, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'pedro', 'nome': 'PEDRO', 'over': 87, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'diniz', 'nome': 'DINIZ', 'over': 86, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'arias', 'nome': 'ARIAS', 'over': 86, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'ayrton_lucas', 'nome': 'AYRTON LUCAS', 'over': 86, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'marcos_rocha', 'nome': 'MARCOS ROCHA', 'over': 86, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'cassio', 'nome': 'CÁSSIO', 'over': 86, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'joao_paulo', 'nome': 'JOÃO PAULO', 'over': 86, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'santos'}
    ,{ 'id': 'gabigol', 'nome': 'GABIGOL', 'over': 86, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'calleri', 'nome': 'CALLERI', 'over': 86, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'sao_paulo'}
    ,{ 'id': 'victor_cuesta', 'nome': 'VICTOR CUESTA', 'over': 85, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'botafogo'}
    ,{ 'id': 'nino', 'nome': 'NINO', 'over': 85, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'allan', 'nome': 'ALLAN', 'over': 85, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'sampaoli', 'nome': 'SAMPAOLI', 'over': 85, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'roger_guedes', 'nome': 'ROGER GUEDES', 'over': 85, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'ganso', 'nome': 'GANSO', 'over': 85, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'piquerez', 'nome': 'PIQUERÉZ', 'over': 85, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'fagner', 'nome': 'FAGNER', 'over': 85, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'everson', 'nome': 'EVERSON', 'over': 85, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'yuri_alberto', 'nome': 'YURI ALBERTO', 'over': 85, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'rony', 'nome': 'RONY', 'over': 85, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'fabricio_bruno', 'nome': 'FABRÍCIO BRUNO', 'over': 84, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'fernandinho', 'nome': 'FERNANDINHO', 'over': 84, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'gerson', 'nome': 'GERSON', 'over': 84, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'jair', 'nome': 'JAIR', 'over': 84, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'andrey_santos', 'nome': 'ANDREY SANTOS', 'over': 84, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'paulinho', 'nome': 'PAULINHO', 'over': 84, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'santos', 'nome': 'SANTOS', 'over': 84, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'fabio', 'nome': 'FÁBIO', 'over': 84, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'pedro_raul', 'nome': 'PEDRO RAÚL', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'david luiz', 'nome': 'DAVID LUIZ', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'manoel', 'nome': 'MANOEL', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'murilo', 'nome': 'MURILO', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'arboleda', 'nome': 'ARBOLEDA', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'leo_pele', 'nome': 'LÉO PELÉ', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'ze_rafael', 'nome': 'ZÉ RAFAEL', 'over': 83, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'keno', 'nome': 'KENO', 'over': 83, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'renato_augusto', 'nome': 'RENATO AUGUSTO', 'over': 83, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'marçal', 'nome': 'MARÇAL', 'over': 83, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'samuel_xavier', 'nome': 'SAMUEL XAVIER', 'over': 83, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'guga', 'nome': 'GUGA', 'over': 83, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'tadeu', 'nome': 'TADEU', 'over': 83, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'goias'}
    ,{ 'id': 'diego_souza', 'nome': 'DIEGO SOUZA', 'over': 83, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'luciano', 'nome': 'LUCIANO', 'over': 83, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'endrick', 'nome': 'ENDRICK', 'over': 83, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'geromel', 'nome': 'GEROMEL', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'kannemann', 'nome': 'KANNEMANN', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'vitao', 'nome': 'VITÃO', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'fausto_vera', 'nome': 'FAUSTO VERA', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'vidal', 'nome': 'VIDAL', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'thaigo_maia', 'nome': 'THIAGO MAIA', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'gabriel', 'nome': 'GABRIEL', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'giuliano', 'nome': 'GIULIANO', 'over': 82, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'everton_ribeiro', 'nome': 'EVERTON RIBEIRO', 'over': 82, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'fabio_santos', 'nome': 'FABIO SANTOS', 'over': 82, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'bustos', 'nome': 'BUSTOS', 'over': 82, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'bento', 'nome': 'BENTO', 'over': 82, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'tiquinho', 'nome': 'TIQUINHO SOARES', 'over': 82, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'luciano', 'nome': 'LUCIANO', 'over': 82, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'gil', 'nome': 'GIL', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'leo_pereira', 'nome': 'LEO PEREIRA', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'mercado', 'nome': 'MERCADO', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'paulinho', 'nome': 'PAULINHO', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'cebolinha', 'nome': 'CEBOLINHA', 'over': 81, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'edenilson', 'nome': 'EDENILSON', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'bitello', 'nome': 'BITELLO', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'alan_patrick', 'nome': 'ALAN PATRICK', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'alex_teixeira', 'nome': 'ALEX TEIXEIRA', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'filipe_luis', 'nome': 'FILIPE LUIS', 'over': 81, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'varela', 'nome': 'VARELA', 'over': 81, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'rafinha', 'nome': 'RAFINHA', 'over': 81, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'luiz_adriano', 'nome': 'LUIZ ADRIADO', 'over': 81, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'marcos_leonardo', 'nome': 'MARCOS LEONARDO', 'over': 81, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'bruno_mendez', 'nome': 'BRUNO MENDEZ', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'pablo', 'nome': 'PABLO', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'teche_tche', 'nome': 'TCHÊ TCHÊ', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'adson', 'nome': 'ADSON', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'du_queiroz', 'nome': 'DU QUEIROZ', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'nestor', 'nome': 'RODRIGO NESTOR', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'odair', 'nome': 'ODAIR HELLMAN', 'over': 80, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'artur', 'nome': 'ARTUR', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'galhardo', 'nome': 'THIAGO GALHARDO', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'ferreira', 'nome': 'FERREIRA', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'matheus_gonçalves', 'nome': 'MATHEUS GONÇALVES', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'matheus_frança', 'nome': 'MATHEUS FRANÇA', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'pikachu', 'nome': 'YAGO PIKACHU', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'vina', 'nome': 'VINA', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'galoppo', 'nome': 'GALOPPO', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'lucas_piton', 'nome': 'LUCAS PITON', 'over': 80, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'arthur_america', 'nome': 'ARTHUR', 'over': 80, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'mario_fernandes', 'nome': 'M. FERNANDES', 'over': 80, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'puma', 'nome': 'PUMA', 'over': 80, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'cavichiolli', 'nome': 'CAVICHIOLLI', 'over': 80, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'joel_carli', 'nome': 'JOEL CARLI', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'robson_bambu', 'nome': 'ROBSON BAMBU', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'juninho', 'nome': 'JUNINHO', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'roni', 'nome': 'RONI', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'pulgar', 'nome': 'PULGAR', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'martinelli', 'nome': 'MARTINELLI', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'luan', 'nome': 'LUAN', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'vagner_mancini', 'nome': 'VAGNER MANCINI', 'over': 79, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'nikao', 'nome': 'NIKÃO', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'pepe', 'nome': 'PEPÊ', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'mendonza', 'nome': 'MENDONZA', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'diogo_barbosa', 'nome': 'DIOGO BARBOSA', 'over': 79, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'rene', 'nome': 'RENÊ', 'over': 79, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'internacional'}
    ,{ 'id': 'nino_paraiba', 'nome': 'NINO PARAIBA', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'rafael', 'nome': 'RAFAEL', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'matheuzinho', 'nome': 'MATHEUZINHO', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'fabio', 'nome': 'FABIO', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'rafael', 'nome': 'RAFAEL', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'adriel', 'nome': 'ADRIEL', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'deyverson', 'nome': 'DEYVERSON', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'alemao', 'nome': 'ALEMÃO', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'internacional'}
    ,{ 'id': 'jamerson', 'nome': 'JAMERSON', 'over': 79, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'iago_maidana', 'nome': 'IAGO MAIDANA', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'raul_gustavo', 'nome': 'RAÚL GUSTAVO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'balbuena', 'nome': 'BALBUENA', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'felipe_melo', 'nome': 'FELIPE MELO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'ramiro', 'nome': 'RAMIRO', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'biel', 'nome': 'BIEL', 'over': 78, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'figueiredo', 'nome': 'FIGUEIREDO', 'over': 78, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'benitez', 'nome': 'BENITEZ', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'lucas_piazon', 'nome': 'LUCAS PIAZÓN', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'lucas_lima', 'nome': 'LUCAS LIMA', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'alexander', 'nome': 'ALEXANDER', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'sander', 'nome': 'SANDER', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'caio_paulista', 'nome': 'CAIO PAULISTA', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'lucas_perri', 'nome': 'LUCAS PERRI', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'walter', 'nome': 'WALTER', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'fernandomiguel', 'nome': 'F. MIGUEL', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'ivan', 'nome': 'IVAN', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'gabriel_coxa', 'nome': 'GABRIEL', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'wellington_paulista', 'nome': 'WELLINGTON PAULISTA', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'pitta', 'nome': 'PITTA', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'john_kennedy', 'nome': 'JOHN KENNEDY', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'flaco_lopez', 'nome': 'FLACO LOPEZ', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'kaio', 'nome': 'KAIO', 'over': 78, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'david_braz', 'nome': 'DAVID BRAZ', 'over': 77, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'yago_felipe', 'nome': 'YAGO FELIPE', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'patrick_de_paula', 'nome': 'PATRICK DE PAULA', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'pirani', 'nome': 'GABRIEL PIRANI', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'alef', 'nome': 'ALEF MANGA', 'over': 77, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'davo', 'nome': 'MATHEUS DAVÓ', 'over': 77, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'romarinho', 'nome': 'ROMARINHO', 'over': 77, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'ale', 'nome': 'ALÊ', 'over': 77, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'daniel', 'nome': 'DANIEL', 'over': 77, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'pec', 'nome': 'GABRIEL PEC', 'over': 77, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'nicolas', 'nome': 'NICOLAS', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'uendel', 'nome': 'UENDEL', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'jorge', 'nome': 'JORGE', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'matheus_alexandre', 'nome': 'MATHEUS ALEXANDRE', 'over': 77, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'apodi', 'nome': 'APODI', 'over': 77, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'rafael_cabral', 'nome': 'RAFAEL CABRAL', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'keiller', 'nome': 'KEILLER', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'internacional'}
    ,{ 'id': 'leo_jardim', 'nome': 'LEO JARDIM', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'cleiton', 'nome': 'CLEITON', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'aloisio', 'nome': 'ALOÍSIO', 'over': 77, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'henrique_almeida', 'nome': 'HENRIQUE ALMEIDA', 'over': 77, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'alerrandro', 'nome': 'ALERRANDO', 'over': 77, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'lele', 'nome': 'LELÊ', 'over': 77, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'david duarte', 'nome': 'DAVID DUARTE', 'over': 76, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'everaldo_america', 'nome': 'EVERALDO', 'over': 76, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'rafael_ramos', 'nome': 'RAFAEL RAMOS', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'marcos_felipe', 'nome': 'MARCOS FELIPE', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'matheus_cunha', 'nome': 'MATHEUS CUNHA', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'navarro', 'nome': 'RAFAEL NAVARRO', 'over': 76, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'jailson', 'nome': 'JAILSON', 'over': 75, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'jonathan_cafu', 'nome': 'JONATHAN CAFU', 'over': 75, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'matheusinho', 'nome': 'MATHEUSINHO', 'over': 75, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'eguinaldo', 'nome': 'EGUINALDO', 'over': 75, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'matheusinho_cui', 'nome': 'MATHEUSINHO', 'over': 75, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'vitor_mendes', 'nome': 'VITOR MENDES', 'over': 74, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'lucas_kal', 'nome': 'LUCAS KAL', 'over': 74, 'pos': 'VOL', 'idpos': 4, 'tipo': 'BRONZE', 'time': 'america_mg'}
    ,{ 'id': 'filipe_augusto', 'nome': 'FILIPE AUGUSTO', 'over': 74, 'pos': 'VOL', 'idpos': 4, 'tipo': 'BRONZE', 'time': 'cuiaba'}
    ,{ 'id': 'vinicius_boff', 'nome': 'VINICIUS BOFF', 'over': 74, 'pos': 'MEI', 'idpos': 3, 'tipo': 'BRONZE', 'time': 'cuiaba'}
    ,{ 'id': 'giovanni', 'nome': 'GIOVANNI', 'over': 74, 'pos': 'MEI', 'idpos': 3, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'marlon', 'nome': 'MARLON', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'america_mg'}
    ,{ 'id': 'hugo', 'nome': 'HUGO', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'goias'}
    ,{ 'id': 'maguinho', 'nome': 'MAGUINHO', 'over': 74, 'pos': 'LD', 'idpos': 7, 'tipo': 'BRONZE', 'time': 'goias'}
    ,{ 'id': 'junior moraes', 'nome': 'JUNIOR MORAES', 'over': 74, 'pos': 'ATA', 'idpos': 1, 'tipo': 'BRONZE', 'time': 'corinthians'}
    ,{ 'id': 'emerson_ramon', 'nome': 'EMERSON RAMON', 'over': 74, 'pos': 'ATA', 'idpos': 1, 'tipo': 'BRONZE', 'time': 'cuiaba'}
    ,{ 'id': 'thiago_santos', 'nome': 'THIAGO SANTOS', 'over': 73, 'pos': 'VOL', 'idpos': 4, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'vitor_eudes', 'nome': 'VITOR EUDES', 'over': 72, 'pos': 'GOL', 'idpos': 8, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'iury_castilho', 'nome': 'IURY CASTILHO', 'over': 72, 'pos': 'ATA', 'idpos': 1, 'tipo': 'BRONZE', 'time': 'cuiaba'}
    ,{ 'id': 'luan_2017', 'nome': 'LUAN 2017', 'over': 88, 'pos': 'MEI', 'idpos': 3, 'tipo': 'REI DA AMÉRICA', 'time': 'gremio'}
    ,{ 'id': 'gabigol_2019', 'nome': 'GABIGOL_2019', 'over': 95, 'pos': 'ATA', 'idpos': 1, 'tipo': 'REI DA AMÉRICA', 'time': 'flamengo'}
    ,{ 'id': 'marinho_2020', 'nome': 'MARINHO 2020', 'over': 86, 'pos': 'PON', 'idpos': 2, 'tipo': 'REI DA AMÉRICA', 'time': 'santos'}
    ,{ 'id': 'pedro_2022', 'nome': 'PEDRO 2022', 'over': 90, 'pos': 'ATA', 'idpos': 1, 'tipo': 'REI DA AMÉRICA', 'time': 'flamengo'}
];

function pontuaFinal(){
    var total = 0
    for(var i = 0; i < 12; i++){
        total = total + jogTime[i].over;
    }

    pont = document.getElementById('pontuafinal');
    pont.innerHTML = total;

}

function sel(){
    window.form = document.getElementById('formulario').value;
    const element = document.getElementById("div_formação");
    element.style.opacity = '0';
    setTimeout(() => element.remove(), 1000);
    sortear();

    switch(window.form){

        case '4-4-2':
        window.zaglim = 2;
        window.vollim = 2;
        window.meilim = 2;
        window.atalim = 1;
        window.ponlim = 1;
        break;

        case '4-3-3':
        window.zaglim = 2;
        window.vollim = 1;
        window.meilim = 2;
        window.atalim = 1;
        window.ponlim = 2;
        break;

        case '3-5-2':
        window.nomes = window.nomes.filter(nome => nome.pos != "LD");
        window.nomes = window.nomes.filter(nome => nome.pos != "LE");
        window.zaglim = 3;
        window.vollim = 3;
        window.meilim = 2;
        window.atalim = 1;
        window.ponlim = 1;
        break;

        case '4-5-1':
        window.nomes = window.nomes.filter(nome => nome.pos != "PON");
        window.zaglim = 2;
        window.vollim = 2;
        window.meilim = 3;
        window.atalim = 1;
        break;
    }
}

function sortNum(){    
    do {
        window.i = parseInt(Math.random() * window.nomes.length);
        window.j = parseInt(Math.random() * window.nomes.length);
        window.m = parseInt(Math.random() * window.nomes.length);
        window.n = parseInt(Math.random() * window.nomes.length);
       } while (window.i == window.j || window.i == window.m || window.j == window.m || window.n == window.i || window. n == window.j || window.n == window.m);
    
}

function reload(){
    document.location.reload(true);
}

function clickLoja(){

    if(cont > 0){
        cont = cont - 1;
        var contador = document.getElementById('cont');
        contador.innerHTML = cont;
        sortear();
    }
    
}


function sortear() {

    if(window.numTime.total == 12){
        const element4 = document.getElementById("pontuacao");
        element4.style.opacity = '1';
        const element = document.getElementById("ladinho");
        element.style.opacity = '0';
        setTimeout(() => element.remove(), 1000);
        const element2 = document.getElementById("loja");
        element2.style.opacity = '0';
        setTimeout(() => element2.remove(), 1000);
        const element3 = document.getElementById("cont");
        element3.style.opacity = '0';
        setTimeout(() => element3.remove(), 1000);        
        
        pontuaFinal();
    }

    sortNum();  
      
    jog = [window.nomes[window.i],window.nomes[window.j],window.nomes[window.m],window.nomes[window.n]]; 

    window.carta1_over = jog[0].over;
    window.carta1_nome = jog[0].nome;
    window.carta1_id = jog[0].id;
    window.carta1_pos = jog[0].pos;
    window.carta1_tipo = jog[0].tipo;
    window.carta1_time = jog[0].time;
    window.carta1_img ='http://127.0.0.1:5500/cartas/' + window.carta1_id  + ".png";
    window.carta1_time ='http://127.0.0.1:5500/times/' + window.carta1_time  + ".png"; 

    img = document.getElementById('carta1_pos');
    img.innerHTML = window.carta1_pos;
    img = document.getElementById('carta1_over');
    img.innerHTML = window.carta1_over;
    img = document.getElementById('carta1_nome');
    img.innerHTML = window.carta1_nome;
    img = document.getElementById('carta1_tipo');
    img.innerHTML = window.carta1_tipo;

    img = document.getElementById('carta1');
    img.src ='http://127.0.0.1:5500/cartas/' + window.carta1_tipo  + ".png"; 

    img = document.getElementById('carta1_img');
    img.src = window.carta1_img;

    img = document.getElementById('carta1_time');
    img.src = window.carta1_time; 


    window.carta2_over = jog[1].over;
    window.carta2_nome = jog[1].nome;
    window.carta2_id = jog[1].id;
    window.carta2_pos = jog[1].pos;
    window.carta2_tipo = jog[1].tipo;
    window.carta2_time = jog[1].time;
    window.carta2_img ='http://127.0.0.1:5500/cartas/' + window.carta2_id  + ".png";
    window.carta2_time ='http://127.0.0.1:5500/times/' + window.carta2_time  + ".png"; 

    img = document.getElementById('carta2_pos');
    img.innerHTML = window.carta2_pos;
    img = document.getElementById('carta2_over');
    img.innerHTML = window.carta2_over;
    img = document.getElementById('carta2_nome');
    img.innerHTML = window.carta2_nome;
    img = document.getElementById('carta2_tipo');
    img.innerHTML = window.carta2_tipo;

    img = document.getElementById('carta2');
    img.src ='http://127.0.0.1:5500/cartas/' + window.carta2_tipo  + ".png";

    img = document.getElementById('carta2_img');
    img.src = window.carta2_img;

    img = document.getElementById('carta2_time');
    img.src = window.carta2_time;

    window.carta3_over = jog[2].over;
    window.carta3_nome = jog[2].nome;
    window.carta3_id = jog[2].id;
    window.carta3_pos = jog[2].pos;
    window.carta3_tipo = jog[2].tipo;
    window.carta3_time = jog[2].time;
    window.carta3_img ='http://127.0.0.1:5500/cartas/' + window.carta3_id  + ".png";
    window.carta3_time ='http://127.0.0.1:5500/times/' + window.carta3_time  + ".png"; 

    img = document.getElementById('carta3_pos');
    img.innerHTML = window.carta3_pos;
    img = document.getElementById('carta3_over');
    img.innerHTML = window.carta3_over;
    img = document.getElementById('carta3_nome');
    img.innerHTML = window.carta3_nome;
    img = document.getElementById('carta3_tipo');
    img.innerHTML = window.carta2_tipo;

    img = document.getElementById('carta3');
    img.src ='http://127.0.0.1:5500/cartas/' + window.carta3_tipo  + ".png";

    img = document.getElementById('carta3_img');
    img.src = window.carta3_img;

    img = document.getElementById('carta3_time');
    img.src = window.carta3_time;

    window.carta4_over = jog[3].over;
    window.carta4_nome = jog[3].nome;
    window.carta4_id = jog[3].id;
    window.carta4_pos = jog[3].pos;
    window.carta4_tipo = jog[3].tipo;
    window.carta4_time = jog[3].time;
    window.carta4_img ='http://127.0.0.1:5500/cartas/' + window.carta4_id  + ".png";
    window.carta4_time ='http://127.0.0.1:5500/times/' + window.carta4_time  + ".png"; 

    img = document.getElementById('carta4_pos');
    img.innerHTML = window.carta4_pos;
    img = document.getElementById('carta4_over');
    img.innerHTML = window.carta4_over;
    img = document.getElementById('carta4_nome');
    img.innerHTML = window.carta4_nome;
    img = document.getElementById('carta4_tipo');
    img.innerHTML = window.carta4_tipo;

    img = document.getElementById('carta4');
    img.src ='http://127.0.0.1:5500/cartas/' + window.carta4_tipo  + ".png";

    img = document.getElementById('carta4_img');
    img.src = window.carta4_img;

    img = document.getElementById('carta4_time');
    img.src = window.carta4_time; 

}

function passa(){

    for(var k = 11; k > 0; k--){
        jogTime[k] = jogTime[k-1];
    }


}

function clickCarta(a) {

    if(jogTime[11].nome == ''){
     if(jogTime[0].nome == ''){  
        
        jogTime[0] = window.nomes[a];
        delete window.nomes[a];

        var fundo = document.getElementById('jog0');
        fundo.src = 'http://127.0.0.1:5500/cartas/' + jogTime[0].tipo  + ".png";
        var nome = document.getElementById('jog0_nome');
        nome.innerHTML = jogTime[0].nome;
        var pos = document.getElementById('jog0_pos');
        pos.innerHTML = jogTime[0].pos;
        var over = document.getElementById('jog0_over');
        over.innerHTML = jogTime[0].over;
        var tipo = document.getElementById('jog0_tipo');
        tipo.innerHTML = jogTime[0].tipo;
        var img = document.getElementById('jog0_img');
        img.src = 'http://127.0.0.1:5500/cartas/' + jogTime[0].id + ".png";
        var time = document.getElementById('jog0_time');
        time.src = 'http://127.0.0.1:5500/times/' + jogTime[0].time + ".png";

        switch(jogTime[0].pos){
            case 'GOL':
                window.numTime.total++;
                numTime.gol = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "GOL");
            break;
            case 'LD':
                window.numTime.total++;
                numTime.ld = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "LD");
            break;
            case 'LE':
                window.numTime.total++;
                numTime.le = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "LE");
            break;
            case 'ZAG':
                window.numTime.total++;
                window.numTime.zag = numTime.zag+1;
                if(window.numTime.zag == window.zaglim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ZAG");  
                }
            break;
            case 'VOL':
                window.numTime.total++;
                window.numTime.vol = numTime.vol+1;
                if(window.numTime.vol == window.vollim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "VOL");  
                }
            break;
            case 'MEI':
                window.numTime.total++;
                window.numTime.mei = numTime.mei+1;
                if(window.numTime.mei == window.meilim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "MEI");  
                }
            break;
            case 'PON':
                window.numTime.total++;
                window.numTime.pon = numTime.pon+1;
                if(window.numTime.pon == window.ponlim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "PON");  
                }
            break;
            case 'ATA':
                window.numTime.total++;
                window.numTime.ata = numTime.ata+1;
                if(window.numTime.ata == window.atalim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ATA");  
                }
            break;
            case 'TEC':
                window.numTime.total++;
                numTime.tec = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "TEC");
            break;

        }

        sortear();

     } else 
     {
        passa();

        jogTime[0] = window.nomes[a];
        delete window.nomes[a];

        switch(jogTime[0].pos){
            case 'GOL':
                window.numTime.total++;
                numTime.gol = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "GOL");
                }
            break;
            case 'LD':
                window.numTime.total++;
                numTime.ld = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "LD");
                }
            break;
            case 'LE':
                window.numTime.total++;
                numTime.le = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "LE");
                }
            break;
            case 'ZAG':
                window.numTime.total++;
                window.numTime.zag = numTime.zag+1;
                if(window.numTime.total < 12){
                if(window.numTime.zag == window.zaglim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ZAG");  
                }
                }
            break;
            case 'VOL':
                window.numTime.total++;
                window.numTime.vol = numTime.vol+1;
                if(window.numTime.total < 12){
                if(window.numTime.vol == window.vollim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "VOL");  
                }
                }
            break;
            case 'MEI':
                window.numTime.total++;
                window.numTime.mei = numTime.mei+1;
                if(window.numTime.total < 12){
                if(window.numTime.mei == window.meilim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "MEI");  
                }
                }
            break;
            case 'PON':
                window.numTime.total++;
                window.numTime.pon = numTime.pon+1;
                if(window.numTime.total < 12){
                if(window.numTime.pon == window.ponlim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "PON");  
                }
                }
            break;
            case 'ATA':
                window.numTime.total++;
                window.numTime.ata = numTime.ata+1;
                if(window.numTime.total < 12){
                if(window.numTime.ata == window.atalim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ATA");  
                }
                }
            break;
            case 'TEC':
                window.numTime.total++;
                numTime.tec = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "TEC");
                }
            break;
 
        }

        jogTime.sort((a, b) => {
            return a.idpos - b.idpos;
        });

        for(var k = 0; k < 12; k++){
            if(jogTime[k].time != ''){
            var id = 'jog'+ k;
            var fundo = document.getElementById(id);
            fundo.src = 'http://127.0.0.1:5500/cartas/' + jogTime[k].tipo  + ".png";
            var nome = document.getElementById(id+'_nome');
            nome.innerHTML = jogTime[k].nome;
            var pos = document.getElementById(id+'_pos');
            pos.innerHTML = jogTime[k].pos;
            var over = document.getElementById(id+'_over');
            over.innerHTML = jogTime[k].over;
            var tipo = document.getElementById(id+'_tipo');
            tipo.innerHTML = jogTime[k].tipo;
            var img = document.getElementById(id+'_img');
            img.src = 'http://127.0.0.1:5500/cartas/' + jogTime[k].id + ".png";
            var time = document.getElementById(id+'_time');
            time.src = 'http://127.0.0.1:5500/times/' + jogTime[k].time + ".png"; 
            }
        }

        sortear();

    }
    }

}
