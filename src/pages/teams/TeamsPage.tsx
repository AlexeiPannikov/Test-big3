import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageContainer from '../../components/page-container/PageContainer'
import Toolbar from '../../components/toolbar/Toolbar'
import Search from '../../ui/search/Search'
import Button from '../../ui/button/Button'
import { ButtonTypesEnum } from '../../ui/button/ButtonTypesEnum'
import PageFooter from '../../components/page-footer/PageFooter'
import FooterTools, { ISize } from '../../components/footer-tools/FooterTools'
import { GetTeamsRequest } from '../../api/services/teams-service/request/GetTeamsRequest'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { getTeamsThunk } from '../../modules/teams-module/getTeamsThunk'
import Content from '../../components/content/Content'
import TeamCard from './components/team-card/TeamCard'

const TeamsPage = () => {
    const [name, setName] = useState<string>('')
    const [page, setPage] = useState<string>('')
    const [pageSize, setPageSize] = useState<string>('')

    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const {
        response: { count, size, data: teams },
    } = useAppSelector((state) => state.teams)

    useEffect(() => {
        searchParams.set('name', name)
        searchParams.set('page', page)
        searchParams.set('pageSize', pageSize)
        if (!name) {
            searchParams.delete('name')
        }
        if (!page) {
            searchParams.delete('page')
        }
        if (!pageSize) {
            searchParams.delete('pageSize')
        }
        const params = Object.fromEntries([...searchParams])
        setSearchParams(params)
    }, [name, page, pageSize])

    const searchChangeHandler = (value: string) => {
        setName(value)
    }

    const pageChangeHandler = (value: number) => {
        value += 1
        setPage(value.toString())
    }

    const sizeChangeHandler = (data: ISize) => {
        setPageSize(data.value.toString())
    }

    const getTeams = () => {
        const params = Object.fromEntries([...searchParams])
        if (
            !(params as GetTeamsRequest).page ||
            !(params as GetTeamsRequest).pageSize
        )
            return
        dispatch(getTeamsThunk(params))
    }

    useEffect(() => {
        getTeams()
    }, [searchParams])

    const getPages = (): number => {
        if (count <= 0 && size <= 0) return 0
        return Math.ceil(count / size)
    }

    return (
        <PageContainer>
            <Toolbar>
                <Search onChange={searchChangeHandler} />
                <Button type="button" buttonType={ButtonTypesEnum.Add}>
                    Add +
                </Button>
            </Toolbar>
            <Content>
                {teams.map((team) => (
                    <TeamCard key={team.id} team={team} />
                ))}
            </Content>
            <PageFooter>
                <FooterTools
                    pageCount={getPages()}
                    onPageChange={pageChangeHandler}
                    onSizeChange={sizeChangeHandler}
                />
            </PageFooter>
        </PageContainer>
    )
}

export default TeamsPage
