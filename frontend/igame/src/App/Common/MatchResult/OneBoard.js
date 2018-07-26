import React from 'react';
import { NavBar, WhiteSpace } from 'antd-mobile';
import { Icon } from 'antd';
import Game from '../../OdooRpc/Game';

export default class OneBoard extends React.Component {
    componentWillMount() {
        //***********接口方法调用**************
        /**
      * params:game_id,round_id,deal_id
      * return:
     */

        const m = new Game((data) => this.success(data), () => console.log('没有拿数据'));
        m.round_deal_info(this.props.match.id, this.props.thisOneRound[0], this.props.boardId)
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.showPage('OneCourseResult')}    //到一轮结果
                >第{this.props.boardId}副牌
                </NavBar>
                <WhiteSpace size='xl' />
                <h1>赛事名称：{this.props.match.name}</h1>
                <h1>赛事ID：{this.props.match.id}</h1>
                {/* <h1>轮次ID：{this.props.courseId[0]}</h1> */}
                <h1>轮次ID：{this.props.thisOneRound[0]}</h1>
                <h1>牌的IDzzzzz：{this.props.boardId}</h1>

            </div>
        );
    }
}