import coinsHtml from '../view/coins.html';

const getCoins = async() => {
    return await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
        method: 'GET'
    });
};

const fillTable = ({ coinsAll, tableContent, coinsContent }) => {
    coinsAll.forEach((c, index) => {
        coinsContent += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>
                    <img 
                        src="${c.image}"
                        alt="${c.name}"
                        class="img-fluid me-4 iconCrypto"
                    />
                    <span>${c.name}</span>
                    <span class="ms-3 text-muted">${c.symbol}</span>
                </td>
                <td>${c.current_price.toLocaleString()}</td>
                <td class=${c.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
                    ${c.price_change_percentage_24h}
                </td>
                <td>${c.total_volume.toLocaleString()}</td>
            </tr>
        `;
    });

    tableContent.innerHTML = coinsContent;
};

export default () => {
    const divElement = document.createElement('div');
    divElement.id = 'CoinsPage';

    divElement.innerHTML = coinsHtml;

    var coinsAll = [];

    getCoins()
        .then(res => res.json())
        .then(data => {
            coinsAll = data;

            let tableContent = document.querySelector('#coinsTableContent');

            let coinsContent = ``;

            fillTable({ coinsAll, tableContent, coinsContent });

            let searchInput = document.querySelector('#searchCoins');

            searchInput.addEventListener('keyup', (e) => {
                const value = e.target.value;

                if (value === '') {

                    coinsContent = ``;

                    fillTable({ coinsAll, tableContent, coinsContent });

                } else {

                    var coins1 = coinsAll.filter((coin) =>
                        coin.name.toLowerCase().includes(value.toLowerCase())
                    );

                    coinsContent = ``;

                    fillTable({ coinsAll: coins1, tableContent, coinsContent });
                }
            });
        })
        .catch(err => console.error(err));

    return divElement;
};