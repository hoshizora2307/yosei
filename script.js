document.addEventListener('DOMContentLoaded', () => {
    // 5年後の生存確率（40%）を小数で表現
    const survivalProbability5Years = 0.40;

    // 5年 = 365.25日 * 5年 = 1826.25日
    const totalDays = 365.25 * 5;

    // 1日あたりの生存確率を計算
    // 生存確率は毎日掛け算で減少していくと仮定
    // (p_daily)^totalDays = p_5years
    // p_daily = (p_5years)^(1/totalDays)
    const dailySurvivalProbability = Math.pow(survivalProbability5Years, 1 / totalDays);

    // 明日の生存確率（パーセント表示）
    const tomorrowSurvivalPercentage = (dailySurvivalProbability * 100).toFixed(2);

    // 表示内容
    const probabilityText = document.getElementById('probability-text');
    const encouragingMessage = document.getElementById('encouraging-message');

    probabilityText.textContent = `${tomorrowSurvivalPercentage}%`;
    encouragingMessage.textContent = '今日を大切に、明日も元気に生きようね！';
});
