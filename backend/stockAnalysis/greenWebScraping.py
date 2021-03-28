from bs4 import BeautifulSoup
import requests


def get_dictionary():
    url = "https://www.newsweek.com/top-500-global-companies-green-rankings-2017-18"

    page = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(page.content, 'html.parser')
    table1 = soup.find("table").find("tbody").find_all("tr")
    dictionary = {}
    ranking = 0
    for td in table1:
        ranking += 1
        company_name = td.find_all("a")[1].string.split(" ")
        dictionary[company_name[0]] = ranking

    return dictionary

# print(get_dictionary())
