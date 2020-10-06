import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap';
import useAxios from '../api';
import Board from '../components/Board';
import CountryCases from '../components/CountryCases';

const Dashboard = () => {
	const [input, setInput] = useState('');

	const onChange = e => {
		const {
			target: { value },
		} = e;
		setInput(value);
	};

	return (
		<Container>
			<Main>
				<MainTitle>Coronavirus Dashboard</MainTitle>
				<Board loading={koreaLoading} data={koreaData} error={koreaError}></Board>
				<Board loading={worldLoading} data={worldData} error={worldError}></Board>
				<WholeWorld>
					<WorldHeader>
						<Title>Countries</Title>
						<SearchArea>
							<SearchIcon />
							<Input type="text" value={input} placeholder="Search" onChange={onChange} />
						</SearchArea>
					</WorldHeader>
					<WorldArticle>
						<Category>
							<Name>Name</Name>
							<Case>Confirmed</Case>
							<Case>New Cases</Case>
							<Case>Deaths</Case>
							<Case>New Deaths</Case>
							<Case>Recovered</Case>
							<Case>Active</Case>
						</Category>
						<Results>
							{countriesData &&
								countriesData.length > 0 &&
								countriesData.map((result, index) => <CountryCases key={index} data={result} />)}
						</Results>
					</WorldArticle>
				</WholeWorld>
			</Main>
		</Container>
	);
};

const Container = styled.div``;

const Main = styled.main`
	margin: 10vh 10vw;
`;

const MainTitle = styled.h1`
	padding: 2rem 0;
	font-size: 2.5rem;
	color: white;
`;

const WholeWorld = styled.section`
	width: 100%;
	height: 80vh;
	margin-bottom: 2rem;
	background-color: #1e2033;
	border-radius: 25px;
`;

const WorldHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20%;
	padding: 2rem 1.5rem;
`;

const Title = styled.h1`
	font-size: 1.5rem;
`;

const SearchArea = styled.div`
	display: flex;
	justify-content: center;
	height: 2.5rem;
	width: 35%;
	padding: 5px;
	background-color: #191b26;
	border-radius: 30px;
`;

const SearchIcon = styled(Search)`
	width: 1rem;
	height: auto;
	margin-right: 10px;
`;

const Input = styled.input`
	height: 100%;
	width: 90%;
	border: none;
	outline: none;
	color: white;
	background-color: #191b26;
	font-size: 1.2rem;
`;

const WorldArticle = styled.article`
	height: 75%;
	font-size: 1.2rem;
	color: gray;
`;

const Category = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 1fr;
	width: 100%;
	height: 12%;
	padding: 0 3rem 0 1.5rem;
	background-color: #272f38;
	font-size: 1.1rem;
`;

const Name = styled.span`
	grid-column: span 2;
	display: flex;
	align-items: center;
`;

const Case = styled.span`
	display: flex;
	align-items: center;
`;

const Results = styled.div`
	height: 88%;
	overflow: scroll;
	overflow-x: hidden;

	& > div:nth-child(2n) {
		background-color: #1e2033;
	}
`;

export default Dashboard;
