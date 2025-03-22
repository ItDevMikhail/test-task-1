import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, Table } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export class ClientList extends Component {

	render() {
		const { clients: { data, loading } } = this.props;
		const tableColumns = [
			{
				title: 'Name',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={''} name={record.name} subTitle={record.username} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => a.email.length - b.email.length,
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: company => (
					<span>{company.name} </span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: website => (
					<span>{website}</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.website.toLowerCase();
						b = b.website.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
		];
		return loading ? (<Loading cover="content" />) : (
			<Card bodyStyle={{ 'padding': '0px' }}>
				<Table columns={tableColumns} dataSource={data} rowKey='id' onRow={(data, index) => {
					return {
						onClick: () => {
							this.props.history.push(`${APP_PREFIX_PATH}/clients/edit-client/${data.id}`)
						}
					}
				}} />
			</Card>
		)

	}
}

const mapStateToProps = (state) => {
	return { clients: state.clients }
}



export default connect(mapStateToProps)(ClientList);