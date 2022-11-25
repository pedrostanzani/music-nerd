import requests
from bs4 import BeautifulSoup


def get_Pitchfork_rating(url):
    headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36'
    }

    request = requests.get(url, headers=headers)
    soup = BeautifulSoup(request, 'lxml')

    score = soup.find('p', attrs={'class': 'Rating-cIWDua'}).text
    album_name = soup.find('h1', attrs={'data-testid': 'ContentHeaderHed'}).text
    artist_name = soup.find('div', attrs={'class': 'BaseText-fFrHpW'}).text
    selector = '#main-content > article > div:nth-child(1) > header > div.GridWrapper-uKcjB.iKxQPP.grid.grid-even-any.grid-items-0.SplitScreenContentHeaderForMusicReview-gNoKDi.hSHBNO > div:nth-child(2) > div > div.SplitScreenContentHeaderLedeBlock-gzOQYf.ipXZGD > span > picture > img'
    image_url = soup.select(selector)[0]['src']
    
    return {
      'album': album_name,
      'artist': artist_name,
      'score': score,
      'url': url,
      'image_url': image_url
    }
