const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite() {
  const url = 'https://playdauntless.com/trials/';
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  // Scrape this week's behemoth, avatar and modifier(s)
  let thisWeekBehemoth = $('#trials > section.trials__trial > article > header > div:nth-child(3) > div.trial-summary__behemoth-name')
  if(thisWeekBehemoth) thisWeekBehemoth = thisWeekBehemoth.text().trim();

  let thisWeekAvatar = `https://playdauntless.com` +$('#trials > section.trials__trial > article > header > div.trial-summary__behemoth-head > img:nth-child(1)').attr('src')
  if(thisWeekAvatar) thisWeekAvatar = thisWeekAvatar.trim();

  let thisWeekModifier1 = $('#trials > section.trials__trial > article > div:nth-child(3) > div.trial-summary__mods > div:nth-child(1) > div.trial-summary__mod-content > div.trial-summary__mod-title')
  if(thisWeekModifier1) thisWeekModifier1 = thisWeekModifier1.text().trim();

  let thisWeekModifier1Description = $('#trials > section.trials__trial > article > div:nth-child(3) > div.trial-summary__mods > div:nth-child(1) > div.trial-summary__mod-content > div.trial-summary__mod-description')
  if(thisWeekModifier1Description) thisWeekModifier1Description = thisWeekModifier1Description.text().trim();

  let thisWeekModifier2 = $('#trials > section.trials__trial > article > div:nth-child(3) > div.trial-summary__mods > div:nth-child(2) > div.trial-summary__mod-content > div.trial-summary__mod-title')
  if(thisWeekModifier2) thisWeekModifier2 = thisWeekModifier2.text().trim();
  
  let thisWeekModifier2Description = $('#trials > section.trials__trial > article > div:nth-child(3) > div.trial-summary__mods > div:nth-child(2) > div.trial-summary__mod-content > div.trial-summary__mod-description')
  if(thisWeekModifier2Description) thisWeekModifier2Description = thisWeekModifier2Description.text().trim();
  
  let thisWeekModifiers = [{name: thisWeekModifier1, description: thisWeekModifier1Description}]
  if(thisWeekModifier2 && thisWeekModifier2 !== "") thisWeekModifiers.push({name: thisWeekModifier2, description: thisWeekModifier2Description})
  
  let thisWeekDateStart = "NOW"

  let thisWeekDateEnd = $('#trials > section.trials__trial > article > header > div.trial-summary__tabs > div.trial-summary__tab.active > div > span > time')
  if(thisWeekDateEnd) thisWeekDateEnd = thisWeekDateEnd.text().trim();

  // Scrape next week's behemoth and modifiers
  let nextWeekBehemoth = $('#trials > section.trials__trial > article > header > div.trial-summary__details.week-content.week-content--nextup > div.trial-summary__behemoth-name')
  if(nextWeekBehemoth) nextWeekBehemoth = nextWeekBehemoth.text().trim();
  
  let nextWeekAvatar = `https://playdauntless.com` +$('#trials > section.trials__trial > article > header > div.trial-summary__behemoth-head > img.week-content.week-content--nextup').attr('src')
  if(nextWeekAvatar) nextWeekAvatar = nextWeekAvatar.trim();
  
  let nextWeekModifier1 = $('#trials > section.trials__trial > article > div.trial-summary__content.card__content.week-content.week-content--nextup.trial-summary__content--show > div.trial-summary__mods > div:nth-child(1) > div.trial-summary__mod-content > div.trial-summary__mod-title')
  if(nextWeekModifier1) nextWeekModifier1 = nextWeekModifier1.text().trim();
  
  let nextWeekModifier1Description = $('#trials > section.trials__trial > article > div.trial-summary__content.card__content.week-content.week-content--nextup.trial-summary__content--show > div.trial-summary__mods > div:nth-child(1) > div.trial-summary__mod-content > div.trial-summary__mod-description')
  if(nextWeekModifier1Description) nextWeekModifier1Description = nextWeekModifier1Description.text().trim();

  let nextWeekModifier2 = $('#trials > section.trials__trial > article > div.trial-summary__content.card__content.week-content.week-content--nextup.trial-summary__content--show > div.trial-summary__mods > div:nth-child(2) > div.trial-summary__mod-content > div.trial-summary__mod-title')
  if(nextWeekModifier2) nextWeekModifier2 = nextWeekModifier2.text().trim();
  
  let nextWeekModifier2Description = $('#trials > section.trials__trial > article > div.trial-summary__content.card__content.week-content.week-content--nextup.trial-summary__content--show > div.trial-summary__mods > div:nth-child(2) > div.trial-summary__mod-content > div.trial-summary__mod-description')
  if(nextWeekModifier2Description) nextWeekModifier2Description = nextWeekModifier2Description.text().trim();

  let nextWeekModifiers = [{name: nextWeekModifier1, description: nextWeekModifier1Description}]
  if(nextWeekModifier2 && nextWeekModifier2 !== "") nextWeekModifiers.push({name: nextWeekModifier2, description: nextWeekModifier2Description})

  let nextWeekDateEnd = $("#trials > section.trials__trial > article > header > div.trial-summary__tabs > div.trial-summary__tab.trial-summary__tab--nextup > div > span > time:nth-child(2)")
  if(nextWeekDateEnd) nextWeekDateEnd = nextWeekDateEnd.text().trim();

  return {
    thisWeek: { behemoth: thisWeekBehemoth, avatar: thisWeekAvatar, date: `${thisWeekDateStart} - ${thisWeekDateEnd}`, modifiers: thisWeekModifiers },
    nextWeek: { behemoth: nextWeekBehemoth, avatar: nextWeekAvatar, date: `${thisWeekDateEnd} - ${nextWeekDateEnd}`, modifiers: nextWeekModifiers }
  };
}

module.exports = { scrapeWebsite };